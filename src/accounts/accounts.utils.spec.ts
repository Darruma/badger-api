import { DataMapper } from '@aws/dynamodb-data-mapper';
import BadgerSDK, { Currency, gqlGenT, Protocol, VaultBehavior, VaultStatus, VaultVersion } from '@badger-dao/sdk';

import { Chain } from '../chains/config/chain.config';
import { TOKENS } from '../config/tokens.config';
import { LeaderBoardType } from '../leaderboards/enums/leaderboard-type.enum';
import { UserClaimMetadata } from '../rewards/entities/user-claim-metadata';
import {
  defaultAccount,
  mockPricing,
  randomSnapshot,
  setFullTokenDataMock,
  setupMapper,
  TEST_ADDR,
  TEST_CHAIN,
} from '../test/tests.utils';
import { fullTokenMockMap } from '../tokens/mocks/full-token.mock';
import { mockBalance } from '../tokens/tokens.utils';
import { VaultDefinition } from '../vaults/interfaces/vault-definition.interface';
import { getVaultDefinition } from '../vaults/vaults.utils';
import * as vaultsUtils from '../vaults/vaults.utils';
import {
  defaultBoost,
  getAccounts,
  getCachedBoost,
  getLatestMetadata,
  queryCachedAccount,
  toVaultBalance,
} from './accounts.utils';

describe('accounts.utils', () => {
  const testSettBalance = (vaultDefinition: VaultDefinition): gqlGenT.UserSettBalance => {
    const settToken = fullTokenMockMap[vaultDefinition.vaultToken];
    const depositToken = fullTokenMockMap[vaultDefinition.depositToken];
    const toWei = (amt: number) => {
      const values = amt * Math.pow(10, settToken.decimals);
      return values.toString();
    };
    return {
      id: TEST_ADDR,
      netDeposit: 4,
      netShareDeposit: toWei(4),
      grossDeposit: 9,
      grossShareDeposit: toWei(9),
      grossWithdraw: 5,
      grossShareWithdraw: toWei(5),
      user: {
        id: TEST_ADDR,
        settBalances: [],
      },
      sett: {
        id: settToken.address,
        name: settToken.name,
        symbol: settToken.symbol,
        available: 1,
        pricePerFullShare: 1034039284374221,
        balance: 3,
        totalSupply: 5,
        netDeposit: 4,
        netShareDeposit: toWei(4),
        grossDeposit: 9,
        grossShareDeposit: toWei(9),
        grossWithdraw: 5,
        grossShareWithdraw: toWei(5),
        decimals: 18,
        token: {
          id: depositToken.address,
          name: depositToken.name,
          symbol: depositToken.symbol,
          decimals: depositToken.decimals,
          totalSupply: 21000000,
        },
        treeDistributions: [],
        harvests: [],
        version: VaultVersion.v1_5,
        status: VaultStatus.guarded,
        isProduction: true,
        protocol: Protocol.Badger,
        createdAt: 0,
        behavior: VaultBehavior.Compounder,
        lastUpdatedAt: 0,
        releasedAt: 0,
      },
    };
  };

  beforeEach(() => {
    jest.spyOn(DataMapper.prototype, 'put').mockImplementation(async (o) => ({
      ...o,
      updatedAt: 0,
    }));
    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    setFullTokenDataMock();
  });

  describe('queryCachedAccount', () => {
    describe('no saved account', () => {
      it('returns undefined', async () => {
        setupMapper([]);
        const actual = await queryCachedAccount(TEST_ADDR);
        expect(actual).toMatchObject(defaultAccount(TEST_ADDR));
      });
    });

    describe('encounters an errors', () => {
      it('returns undefined', async () => {
        jest.spyOn(DataMapper.prototype, 'query').mockImplementation(() => {
          throw new Error();
        });
        const actual = await queryCachedAccount(TEST_ADDR);
        expect(actual).toMatchObject(defaultAccount(TEST_ADDR));
      });
    });

    describe('a saved account', () => {
      it('returns the stored account', async () => {
        const expected = { address: TEST_ADDR, claimableBalances: [] };
        setupMapper([expected]);
        const actual = await queryCachedAccount(TEST_ADDR);
        expect(actual).toMatchObject(expected);
      });
    });
  });

  describe('getAccounts', () => {
    describe('users exist', () => {
      it('returns a list of user accounts', async () => {
        const mockAccounts = [TOKENS.BADGER, TOKENS.DIGG, TOKENS.WBTC, TOKENS.FTM_GEIST];
        const result: gqlGenT.UsersQuery = {
          users: mockAccounts.map((account) => ({ id: account, settBalances: [] })),
        };
        let responded = false;
        jest.spyOn(Chain.prototype, 'getSdk').mockImplementation(async () => TEST_CHAIN.sdk);
        jest.spyOn(TEST_CHAIN.sdk.graph, 'loadUsers').mockImplementation(async (_a) => {
          if (responded) {
            return { users: [] };
          }
          responded = true;
          return result;
        });
        const users = await getAccounts(TEST_CHAIN);
        expect(users).toMatchObject(mockAccounts);
      });
    });

    describe('users do not exist', () => {
      it('returns an empty list', async () => {
        jest.spyOn(BadgerSDK.prototype, 'ready');
        jest.spyOn(Chain.prototype, 'getSdk').mockImplementation(async () => TEST_CHAIN.sdk);
        jest.spyOn(TEST_CHAIN.sdk.graph, 'loadUsers').mockImplementationOnce(async () => ({ users: [] }));
        const nullReturn = await getAccounts(TEST_CHAIN);
        expect(nullReturn).toMatchObject([]);
      });
    });
  });

  describe('toVaultBalance', () => {
    const chain = TEST_CHAIN;

    const testToVaultBalance = (vaultAddress: string) => {
      it.each([
        [undefined, Currency.USD],
        [Currency.USD, Currency.USD],
        [Currency.ETH, Currency.ETH],
      ])('returns sett balance request in %s currency with %s denominated value', async (currency, _toCurrency) => {
        const vault = getVaultDefinition(chain, vaultAddress);
        const snapshot = randomSnapshot(vault);
        const cachedVault = await vaultsUtils.defaultVault(chain, vault);
        cachedVault.balance = snapshot.balance;
        cachedVault.pricePerFullShare = snapshot.balance / snapshot.totalSupply;
        jest.spyOn(vaultsUtils, 'getCachedVault').mockImplementation(async (_c, _v) => cachedVault);
        const depositToken = fullTokenMockMap[cachedVault.underlyingToken];
        mockPricing();
        setFullTokenDataMock();
        const wbtc = fullTokenMockMap[TOKENS.WBTC];
        const weth = fullTokenMockMap[TOKENS.WETH];
        const tokenBalances = [mockBalance(wbtc, 1), mockBalance(weth, 20)];
        const cached = { vault: vault.vaultToken, tokenBalances };
        setupMapper([cached]);
        const mockedBalance = testSettBalance(vault);
        const actual = await toVaultBalance(chain, mockedBalance, currency);
        expect(actual).toBeTruthy();
        expect(actual.name).toEqual(depositToken.name);
        expect(actual.symbol).toEqual(depositToken.symbol);
        expect(actual.pricePerFullShare).toEqual(snapshot.balance / snapshot.totalSupply);
      });
    };

    describe('non-digg token conversion', () => {
      testToVaultBalance(TOKENS.BBADGER);
    });

    describe('digg token conversion', () => {
      testToVaultBalance(TOKENS.BDIGG);
    });
  });

  describe('defaultBoost', () => {
    it('returns a boost with all fields as the default values', () => {
      const expected = {
        leaderboard: `${TEST_CHAIN.network}_${LeaderBoardType.BadgerBoost}`,
        boostRank: 0,
        address: TEST_ADDR,
        boost: 1,
        stakeRatio: 0,
        nftBalance: 0,
        nativeBalance: 0,
        bveCvxBalance: 0,
        diggBalance: 0,
        nonNativeBalance: 0,
      };
      expect(defaultBoost(TEST_CHAIN, TEST_ADDR)).toMatchObject(expected);
    });
  });

  describe('getCachedBoost', () => {
    describe('no cached boost', () => {
      it('returns the default boost', async () => {
        setupMapper([]);
        const result = await getCachedBoost(TEST_CHAIN, TEST_ADDR);
        expect(result).toMatchObject(defaultBoost(TEST_CHAIN, TEST_ADDR));
      });
    });
    describe('a previously cached boost', () => {
      it('returns the default boost', async () => {
        const boost = defaultBoost(TEST_CHAIN, TEST_ADDR);
        boost.boostRank = 42;
        boost.stakeRatio = 1;
        boost.nativeBalance = 32021;
        boost.nonNativeBalance = 32021;
        setupMapper([boost]);
        const result = await getCachedBoost(TEST_CHAIN, TEST_ADDR);
        expect(result).toMatchObject(boost);
      });
    });
  });

  describe('getLatestMetadata', () => {
    it('should not create new meta obj if exists', async () => {
      const put = jest.spyOn(DataMapper.prototype, 'put').mockImplementation();
      const meta = Object.assign(new UserClaimMetadata(), {
        startBlock: 100,
        endBlock: 101,
        chainStartBlock: `${TEST_CHAIN.network}_123123`,
        chain: TEST_CHAIN.network,
        count: 0,
      });
      setupMapper([meta]);
      const latest_meta = await getLatestMetadata(TEST_CHAIN);
      expect(latest_meta).toEqual(meta);
      expect(put.mock.calls).toEqual([]);
    });

    it('should create new meta if no meta obj found', async () => {
      const put = jest.spyOn(DataMapper.prototype, 'put').mockImplementation();
      const mockedBlockNumber = 100;
      jest.spyOn(TEST_CHAIN.provider, 'getBlockNumber').mockImplementation(() => Promise.resolve(mockedBlockNumber));
      const expected = Object.assign(new UserClaimMetadata(), {
        startBlock: 100,
        endBlock: 101,
        chainStartBlock: `${TEST_CHAIN.network}_${mockedBlockNumber}`,
        chain: TEST_CHAIN.network,
        count: 0,
      });
      setupMapper([]);
      await getLatestMetadata(TEST_CHAIN);
      expect(put.mock.calls[0][0]).toEqual(expected);
    });
  });
});
