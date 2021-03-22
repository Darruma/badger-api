import { Inject, Service } from '@tsed/di';
import { BadRequest, InternalServerError, NotFound } from '@tsed/exceptions';
import { GraphQLClient } from 'graphql-request';
import { Chain } from '../chains/config/chain.config';
import { BADGER_URL } from '../config/constants';
import { getSdk, OrderDirection, Sdk as BadgerGraphqlSdk } from '../graphql/generated/badger';
import { SettBalance, UserAccount } from '../interface/UserAccount';
import { PricesService } from '../prices/PricesService';

@Service()
export class UsersService {
  @Inject()
  pricesService!: PricesService;

  private badgerGraphqlSdk: BadgerGraphqlSdk;

  constructor() {
    const badgerGraphqlClient = new GraphQLClient(BADGER_URL);
    this.badgerGraphqlSdk = getSdk(badgerGraphqlClient);
  }

  /**
   * Retrieve a user's account details. This includes all positions in setts,
   * the individual earnings from each sett, and claimed amounts of Badger /
   * Digg per sett.
   *
   * @param userId User ethereum account address
   */
  async getUserDetails(chain: Chain, userId: string): Promise<UserAccount> {
    if (!userId) {
      throw new BadRequest('userId is required');
    }

    // TheGraph address are all lower case, this is required
    const { user } = await this.badgerGraphqlSdk.User({
      id: userId.toLowerCase(),
      orderDirection: OrderDirection.Asc,
    });

    if (!user) {
      throw new NotFound(`${userId} is not a protocol participant`);
    }

    const userBalances = user.settBalances;
    const settBalances = await Promise.all(
      userBalances.map(async (settBalance) => {
        const sett = settBalance.sett;
        const settInfo = chain.setts.find((s) => s.settToken === settBalance.sett.id);

        // SettInfo should not be undefined - if so there is a config issue
        if (!settInfo) {
          throw new InternalServerError('Unable to fetch user account');
        }

        let ratio = 1;
        let settPricePerFullShare = parseInt(sett.pricePerFullShare) / 1e18;
        if (settInfo.symbol.toLowerCase() === 'digg') {
          ratio = sett.balance / sett.totalSupply / settPricePerFullShare;
          settPricePerFullShare = sett.balance / sett.totalSupply;
        }
        const netShareDeposit = parseInt(settBalance.netShareDeposit);
        const grossDeposit = parseInt(settBalance.grossDeposit) * ratio;
        const grossWithdraw = parseInt(settBalance.grossWithdraw) * ratio;
        const settTokens = settPricePerFullShare * netShareDeposit;
        const earned = (settTokens - grossDeposit + grossWithdraw) / Math.pow(10, sett.token.decimals);
        const balance = settTokens / Math.pow(10, sett.token.decimals);
        const earnedUsd = await this.pricesService.getValue(sett.token.id, earned);
        const balanceUsd = await this.pricesService.getValue(sett.token.id, balance);

        return {
          id: settInfo.settToken,
          name: settInfo.name,
          asset: settInfo.symbol,
          value: balanceUsd,
          earnedValue: earnedUsd,
        } as SettBalance;
      }),
    );

    const accountValue = settBalances.map((b) => b.value).reduce((total, value) => (total += value));
    const accountEarnedValue = settBalances.map((b) => b.earnedValue).reduce((total, value) => (total += value));
    return {
      id: userId,
      value: accountValue,
      earnedValue: accountEarnedValue,
      settAccounts: settBalances,
    } as UserAccount;
  }
}