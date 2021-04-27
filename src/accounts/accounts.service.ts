import { Inject, Service } from '@tsed/di';
import { BadRequest, InternalServerError } from '@tsed/exceptions';
import { ethers } from 'ethers';
import { GraphQLClient } from 'graphql-request';
import { Chain } from '../chains/config/chain.config';
import { guestListAbi } from '../config/abi/guest-list.abi';
import { yearnAffiliateVaultWrapperAbi } from '../config/abi/yearn-affiliate-vault-wrapper.abi';
import { Protocol } from '../config/constants';
import { getSdk, OrderDirection } from '../graphql/generated/badger';
import { PricesService } from '../prices/prices.service';
import { TokenRequest } from '../tokens/interfaces/token-request.interface';
import { TokensService } from '../tokens/tokens.service';
import { getToken } from '../tokens/tokens.utils';
import { Account } from './interfaces/account.interface';
import { AccountLimits } from './interfaces/account-limits.interface';

@Service()
export class AccountsService {
  @Inject()
  pricesService!: PricesService;
  @Inject()
  tokensService!: TokensService;

  /**
   * Retrieve a user's account details. This includes all positions in setts,
   * the individual earnings from each sett, and claimed amounts of Badger /
   * Digg per sett.
   *
   * @param userId User ethereum account address
   */
  async getAccount(chain: Chain, accountId: string): Promise<Account> {
    if (!accountId) {
      throw new BadRequest('accountId is required');
    }

    const badgerGraphqlClient = new GraphQLClient(chain.graphUrl);
    const badgerGraphqlSdk = getSdk(badgerGraphqlClient);
    const { user } = await badgerGraphqlSdk.User({
      id: accountId.toLowerCase(),
      orderDirection: OrderDirection.Asc,
    });

    const account: Account = {
      id: accountId,
      value: 0,
      earnedValue: 0,
      balances: [],
      depositLimits: {},
    };

    if (user) {
      const userBalances = user.settBalances;
      account.balances = await Promise.all(
        userBalances.map(async (settBalance) => {
          const sett = settBalance.sett;
          const settDefinition = chain.setts.find((s) => s.settToken.toLowerCase() === settBalance.sett.id);

          // settDefinition should not be undefined - if so there is a config issue
          if (!settDefinition) {
            throw new InternalServerError('Unable to fetch user account');
          }

          let ratio = 1;
          let settPricePerFullShare = parseInt(sett.pricePerFullShare) / 1e18;
          if (settDefinition.symbol.toLowerCase() === 'digg') {
            ratio = sett.balance / sett.totalSupply / settPricePerFullShare;
            settPricePerFullShare = sett.balance / sett.totalSupply;
          }
          const netShareDeposit = parseInt(settBalance.netShareDeposit);
          const grossDeposit = parseInt(settBalance.grossDeposit) * ratio;
          const grossWithdraw = parseInt(settBalance.grossWithdraw) * ratio;
          const settTokens = settPricePerFullShare * netShareDeposit;
          const earned = (settTokens - grossDeposit + grossWithdraw) / Math.pow(10, sett.token.decimals);
          const balance = settTokens / Math.pow(10, sett.token.decimals);

          const earnedTokenRequest: TokenRequest = {
            chain: chain,
            sett: settDefinition,
            balance: earned,
          };
          const balanceTokenRequest: TokenRequest = {
            chain: chain,
            sett: settDefinition,
            balance: balance,
          };
          const [earnedUsd, balanceUsd, earnedTokens, balanceTokens] = await Promise.all([
            this.pricesService.getValue(sett.token.id, earned),
            this.pricesService.getValue(sett.token.id, balance),
            this.tokensService.getSettTokens(earnedTokenRequest),
            this.tokensService.getSettTokens(balanceTokenRequest),
          ]);

          return {
            id: settDefinition.settToken,
            name: settDefinition.name,
            asset: settDefinition.symbol,
            value: balanceUsd,
            earnedValue: earnedUsd,
            earnedTokens: earnedTokens,
            balance: balanceTokens,
          };
        }),
      );
    }

    account.value = account.balances.map((b) => b.value).reduce((total, value) => (total += value), 0);
    account.earnedValue = account.balances.map((b) => b.earnedValue).reduce((total, value) => (total += value), 0);
    account.depositLimits = await this.getAccountLimits(chain, accountId);
    return account;
  }

  async getAccountLimits(chain: Chain, accountId: string): Promise<AccountLimits> {
    const limits: AccountLimits = {};
    const yearnVaults = chain.setts.filter((s) => s.affiliate && s.affiliate.protocol === Protocol.Yearn);

    await Promise.all(
      yearnVaults.map(async (vault) => {
        const vaultToken = getToken(vault.settToken);

        let limit = 0.5;
        try {
          const wrapper = new ethers.Contract(vault.settToken, yearnAffiliateVaultWrapperAbi, chain.provider);
          const guestListContract = await wrapper.guestList();
          const guestList = new ethers.Contract(guestListContract, guestListAbi, chain.provider);

          const divisor = Math.pow(10, vaultToken.decimals);
          limit = (await guestList.userDepositCap()) / divisor;
          const available = (await guestList.remainingUserDepositAllowed(accountId)) / divisor;
          limits[vault.settToken] = {
            available: available,
            limit: limit,
          };
        } catch (err) {
          limits[vault.settToken] = {
            available: limit,
            limit: limit,
          };
        }
      }),
    );

    return limits;
  }
}