import { Erc20__factory, formatBalance, Network, Token } from '@badger-dao/sdk';
import { GraphQLClient } from 'graphql-request';

import { CachedValueSource } from '../../aws/models/apy-snapshots.model';
import { VaultTokenBalance } from '../../aws/models/vault-token-balance.model';
import { Chain } from '../../chains/config/chain.config';
import { BALANCER_URL } from '../../config/constants';
import {
  BalancerVault__factory,
  StablePhantomVault__factory,
  StablePool__factory,
  WeightedPool__factory,
} from '../../contracts';
import { getSdk as getBalancerSdk, OrderDirection, PoolSnapshot_OrderBy } from '../../graphql/generated/balancer';
import { TokenPrice } from '../../prices/interface/token-price.interface';
import { SourceType } from '../../rewards/enums/source-type.enum';
import { valueSourceToCachedValueSource } from '../../rewards/rewards.utils';
import { CachedTokenBalance } from '../../tokens/interfaces/cached-token-balance.interface';
import { getFullToken, toBalance } from '../../tokens/tokens.utils';
import { VaultDefinition } from '../../vaults/interfaces/vault-definition.interface';
import { getCachedVault, getVaultDefinition } from '../../vaults/vaults.utils';
import { createValueSource } from '../interfaces/value-source.interface';

/* eslint-disable @typescript-eslint/no-non-null-assertion */

export class BalancerStrategy {
  static async getValueSources(vaultDefinition: VaultDefinition): Promise<CachedValueSource[]> {
    return getBalancerSwapFees(vaultDefinition);
  }
}

export async function getBPTPrice(chain: Chain, token: string): Promise<TokenPrice> {
  let totalSupply;

  try {
    const maybePhantomPool = StablePhantomVault__factory.connect(token, chain.provider);
    // total supply never changes on a phantom pool, you must use virtual supply
    totalSupply = formatBalance(await maybePhantomPool.getVirtualSupply());
  } catch {
    const contract = Erc20__factory.connect(token, chain.provider);
    totalSupply = formatBalance(await contract.totalSupply());
  }

  const tokens = await getBalancerPoolTokens(chain, token);
  const value = tokens.map((t) => t.value).reduce((total, value) => (total += value), 0);

  return {
    address: token,
    price: value / totalSupply,
  };
}

export async function getBalancerPoolTokens(chain: Chain, token: string): Promise<CachedTokenBalance[]> {
  const sdk = await chain.getSdk();

  const maybePhantomPool = StablePhantomVault__factory.connect(token, sdk.provider);
  let bptIndex: number | undefined;
  try {
    const maybeBptIndex = await maybePhantomPool.getBptIndex();
    bptIndex = maybeBptIndex.toNumber();
  } catch {} // ignore the error - its not a phantom pool

  const pool = WeightedPool__factory.connect(token, sdk.provider);
  const [vault, poolId] = await Promise.all([pool.getVault(), pool.getPoolId()]);
  const vaultContract = BalancerVault__factory.connect(vault, sdk.provider);
  const poolTokens = await vaultContract.getPoolTokens(poolId);

  const tokens: CachedTokenBalance[] = [];

  for (let i = 0; i < poolTokens.balances.length; i++) {
    if (bptIndex && i === bptIndex) {
      continue;
    }
    const token = await getFullToken(chain, poolTokens.tokens[i]);
    const balance = formatBalance(poolTokens.balances[i], token.decimals);
    const tokenBalance = await toBalance(token, balance);
    tokens.push(tokenBalance);
  }

  return tokens;
}

export async function getBalancerVaultTokenBalance(chain: Chain, token: string): Promise<VaultTokenBalance> {
  const vaultDefinition = getVaultDefinition(chain, token);
  const { depositToken, vaultToken } = vaultDefinition;
  const cachedTokens = await getBalancerPoolTokens(chain, depositToken);
  const sett = await getCachedVault(chain, vaultDefinition);

  let totalSupply;

  try {
    const maybePhantomPool = StablePhantomVault__factory.connect(depositToken, chain.provider);
    // total supply never changes on a phantom pool, you must use virtual supply
    totalSupply = formatBalance(await maybePhantomPool.getVirtualSupply());
  } catch {
    const contract = Erc20__factory.connect(depositToken, chain.provider);
    totalSupply = formatBalance(await contract.totalSupply());
  }

  const scalar = sett.balance / totalSupply;
  cachedTokens.forEach((cachedToken) => {
    cachedToken.balance *= scalar;
    cachedToken.value *= scalar;
  });
  const vaultTokenBalance = {
    vault: vaultToken,
    tokenBalances: cachedTokens,
  };
  return Object.assign(new VaultTokenBalance(), vaultTokenBalance);
}

export async function resolveBalancerPoolTokenPrice(chain: Chain, token: Token, pool?: string): Promise<TokenPrice> {
  const balances = await getBalancerPoolTokens(chain, pool!);
  const sdk = await chain.getSdk();

  const maybeWeightedPool = WeightedPool__factory.connect(pool!, sdk.provider);
  try {
    const weights = await maybeWeightedPool.getNormalizedWeights();
    const targetIndex = balances.findIndex((b) => b.address === token.address);

    if (targetIndex < 0) {
      throw new Error(`${token.name} not found in target BPT (${pool})`);
    }

    const targetBalance = balances[targetIndex];
    const expectedWeight = formatBalance(weights[targetIndex]);
    const totalOtherValue = balances
      .filter((b) => b.address !== token.address)
      .reduce((total, balance) => (total += balance.value), 0);
    const multiplier = expectedWeight / (1 - expectedWeight);
    const tokenPrice = (totalOtherValue * multiplier) / targetBalance.balance;

    return {
      address: token.address,
      price: tokenPrice,
    };
  } catch {
    // Attempt instead, to evaluate as a stable pool
    // We will assume stable pools, by nature, to have two assets - presuambly pegged

    try {
      if (balances.length != 2) {
        throw new Error('Pool has unexpected number of tokens!');
      }

      // we can calculate "x" in terms of "y" - this is our token in terms of some known token
      const probablyStablePool = StablePool__factory.connect(pool!, sdk.provider);

      // derivation adapted from https://twitter.com/0xa9a/status/1514192791689179137
      const [amplificationParameter, lastInvariantData] = await Promise.all([
        probablyStablePool.getAmplificationParameter(),
        probablyStablePool.getLastInvariant(),
      ]);

      const requestTokenIndex = balances[0].address === token.address ? 0 : 1;
      const requestToken = balances[requestTokenIndex];
      const pairToken = balances[1 - requestTokenIndex];

      const amplificiation =
        4 * (amplificationParameter.value.toNumber() / amplificationParameter.precision.toNumber());
      const invariant = formatBalance(lastInvariantData.lastInvariant);

      // calculate scalar y/x
      const scalar = pairToken.balance / requestToken.balance;
      const divisor = Math.pow(invariant, 3);

      // calculate numerator
      const numeratorTop = 2 * amplificiation * Math.pow(requestToken.balance, 2) * pairToken.balance;
      const numerator = 1 + numeratorTop / divisor;

      // calculate denominator
      const denominatorTop = 2 * amplificiation * Math.pow(pairToken.balance, 2) * requestToken.balance;
      const denominator = 1 + denominatorTop / divisor;

      const resultScalar = scalar * (numerator / denominator);
      const requestTokenPrice = resultScalar * (pairToken.value / pairToken.balance);

      return {
        address: token.address,
        price: requestTokenPrice,
      };
    } catch (err) {
      console.error({ err, message: `Unable to price ${token.name}` });
    }
  }

  return {
    address: token.address,
    price: 0,
  };
}

export async function getBalancerSwapFees(vault: VaultDefinition): Promise<CachedValueSource[]> {
  try {
    const chain = Chain.getChain(Network.Ethereum);
    const client = new GraphQLClient(BALANCER_URL);
    const sdk = getBalancerSdk(client);

    const pool = WeightedPool__factory.connect(vault.depositToken, chain.provider);
    const poolId = await pool.getPoolId();

    const { poolSnapshots } = await sdk.PoolSnapshots({
      first: 14,
      where: {
        pool: poolId.toLowerCase(),
      },
      orderBy: PoolSnapshot_OrderBy.Timestamp,
      orderDirection: OrderDirection.Desc,
    });

    if (poolSnapshots.length < 1) {
      return [];
    }

    let totalFees = 0;
    let totalLiquifity = 0;

    for (const snapshot of poolSnapshots) {
      const { swapFees, liquidity } = snapshot;
      totalFees += Number(swapFees);
      totalLiquifity += Number(liquidity);
    }

    // we are taking an average of the fees over 2 weeks, there are 26 two week periods
    const yearlyFees = totalFees * 26;
    const yearlyApr = (yearlyFees / totalLiquifity) * 100;

    return [
      valueSourceToCachedValueSource(createValueSource('Balancer LP Fees', yearlyApr), vault, SourceType.TradeFee),
    ];
  } catch {
    // some of the aura vaults are not pools - they will error (auraBal, graviAura)
    return [];
  }
}
