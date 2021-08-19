import { BigNumber, ethers } from 'ethers';
import { getAccounts, getCachedAccount, getCachedBoost, getUserAccounts, toSettBalance } from '../accounts/accounts.utils';
import { AccountMap } from '../accounts/interfaces/account-map.interface';
import { CachedAccount } from '../accounts/interfaces/cached-account.interface';
import { CachedBalance } from '../accounts/interfaces/cached-claimable-balance.interface';
import { getDataMapper } from '../aws/dynamodb.utils';
import { loadChains } from '../chains/chain';
import { Chain } from '../chains/config/chain.config';
import { BadgerTree__factory } from '../contracts';
import { UserSettBalance } from '../graphql/generated/badger';
import { CachedBoostMultiplier } from '../rewards/interfaces/cached-boost-multiplier.interface';
import { RewardAmounts } from '../rewards/interfaces/reward-amounts.interface';
import { RewardsService } from '../rewards/rewards.service';
import { getTreeDistribution } from '../rewards/rewards.utils';
import { getSettDefinition } from '../setts/setts.utils';

async function getAccountMap(addresses: string[]): Promise<AccountMap> {
  const accounts = await Promise.all(addresses.map(async (addr) => getCachedAccount(addr)));
  return Object.fromEntries(accounts.map((acc) => [acc.address, acc]));
}

async function refreshAccountClaimableBalances(chains: Chain[], addresses: string[], batchAccounts: AccountMap) {
  const treeDistribution = await getTreeDistribution();
  const calls: { user: string; chain: Chain; claim: Promise<[string[], BigNumber[]]> }[] = [];
  await Promise.all(
    addresses.map(async (acc) => {
      await Promise.all(
        chains.map(async (chain) => {
          const claim = treeDistribution.claims[acc];
          if (!claim || !chain.badgerTree) {
            return;
          }
          const badgerTree = BadgerTree__factory.connect(chain.badgerTree, chain.batchProvider);
          calls.push({
            user: acc,
            chain,
            claim: badgerTree.getClaimableFor(acc, claim.tokens, claim.cumulativeAmounts),
          });
        }),
      );
    }),
  );
  const userClaims = await Promise.all(calls.map((call) => call.claim));
  userClaims.forEach((claim, i) => {
    const { chain, user } = calls[i];
    if (!user) {
      return;
    }
    const account = batchAccounts[user];
    const [tokens, amounts] = claim;
    const rewardAmounts: RewardAmounts = { tokens, amounts };
    const claimableBalances = rewardAmounts.tokens.map((token, i) => {
      const balance = rewardAmounts.amounts[i];
      return Object.assign(new CachedBalance(), {
        network: chain.network,
        address: token,
        balance: balance.toString(),
      });
    });
    account.claimableBalances = account.claimableBalances
      .filter((bal) => bal.network !== chain.network)
      .concat(claimableBalances);
    batchAccounts[user] = account;
  });
}

async function refreshAccountSettBalances(chains: Chain[], addresses: string[], batchAccounts: AccountMap) {
  await Promise.all(
    chains.map(async (chain) => {
      const response = await getUserAccounts(chain, addresses);
      for (const user of response.users) {
        const address = ethers.utils.getAddress(user.id);
        const account = batchAccounts[address];
        if (user) {
          const userBalances = user.settBalances as UserSettBalance[];
          if (userBalances) {
            const balances = userBalances.filter((balance) => {
              try {
                getSettDefinition(chain, balance.sett.id);
                return true;
              } catch (err) {
                return false;
              }
            });
            const settBalances = await Promise.all(balances.map(async (bal) => toSettBalance(chain, bal)));
            account.balances = account.balances.filter((bal) => bal.network !== chain.network).concat(settBalances);
          }
        }
        account.value = account.balances.map((b) => b.value).reduce((total, value) => (total += value), 0);
        account.earnedValue = account.balances.map((b) => b.earnedValue).reduce((total, value) => (total += value), 0);
        batchAccounts[address] = account;
      }
    }),
  );
}

async function refreshAccountBoostInfo(_chains: Chain[], addresses: string[], batchAccounts: AccountMap) {
  const userBoosts = await RewardsService.getUserBoosts(addresses);
  await Promise.all(
    addresses.map(async (acc) => {
      const userBoost = userBoosts[acc];
      const account = batchAccounts[acc];
      const cachedBoost = await getCachedBoost(acc);
      account.nativeBalance = cachedBoost.nativeBalance;
      account.nonNativeBalance = cachedBoost.nonNativeBalance;
      account.boost = cachedBoost.boost;
      account.boostRank = cachedBoost.rank;
      account.multipliers = Object.entries(userBoost.multipliers).map((e) => {
        const [key, value] = e;
        return Object.assign(new CachedBoostMultiplier(), {
          address: key,
          multiplier: isNaN(value) ? 0 : value,
        });
      });
      batchAccounts[acc] = account;
    }),
  );
}

async function refreshAccounts(refreshFns: (chains: Chain[], addresses: string[], batchAccounts: AccountMap) => Promise<void>[], customBatch?: number): Promise<void> {
  const chains = loadChains();
  const allAccounts = await Promise.all(chains.map((chain) => getAccounts(chain)));
  const accounts = [...new Set(...allAccounts)];

  const batchSize = customBatch ?? 500;
  const mapper = getDataMapper();
  for (let i = 0; i < accounts.length; i += batchSize) {
    const addresses = accounts.slice(i, i + batchSize);
    const batchAccounts = await getAccountMap(addresses);
    await Promise.all(refreshFns(chains, addresses, batchAccounts));
    const cachedAccounts = Object.values(batchAccounts).map((account) => Object.assign(new CachedAccount(), account));
    for await (const _item of mapper.batchPut(cachedAccounts)) {
    }
  }
}

export async function refreshUserAccounts() {
  console.time('refreshUserAccounts');
  await Promise.all([
    refreshAccounts((chains, addresses, batchAccounts) => [
      refreshAccountClaimableBalances(chains, addresses, batchAccounts),
      refreshAccountBoostInfo(chains, addresses, batchAccounts),
    ]),
    refreshAccounts((chains, addresses, batchAccounts) => {
      const tasks: Promise<void>[] = [];
      const taskSize = addresses.length / 2;
      for (let i = 0; i < addresses.length; i += taskSize) {
        const taskAddresses = addresses.slice(i, i + taskSize);
        tasks.push(refreshAccountSettBalances(chains, taskAddresses, batchAccounts))
      }
      return tasks;
    }, 100),
  ]);
  console.timeEnd('refreshUserAccounts');
}
