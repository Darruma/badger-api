import { PlatformTest } from '@tsed/common';
import { CitadelService } from './citadel.service';
import { treasurySummaryMock } from '../treasury/examples/treasury-summary.mock';
import { mockPricing } from '../test/tests.utils';
import { getPrice } from '../prices/prices.utils';
import { TOKENS } from '../config/tokens.config';

import * as treasuryUtils from '../treasury/treasury.utils';
import * as citadelUtils from './citadel.utils';

import citadelTreasuryMock from '@badger-dao/sdk-mocks/generated/ethereum/api/loadCitadelTreasury.json';
import citadelSummaryMock from '@badger-dao/sdk-mocks/generated/ethereum/api/loadCitadelSummary.json';
import { CitadelData } from './destructors/citadel-data.destructor';
import { CitadelRewardType } from '@badger-dao/sdk';

describe('CitadelService', () => {
  let service: CitadelService;

  beforeAll(async () => {
    await PlatformTest.create();
    service = PlatformTest.get<CitadelService>(CitadelService);
  });
  afterEach(PlatformTest.reset);

  function mockCitadelData(): CitadelData {
    const citadelData = new Map();
    citadelData.set('marketCap', 15_000_000);
    citadelData.set('marketCapToTreasuryRatio', 15_000_000 / 3_500_000);
    citadelData.set('valuePaid', 0);
    const citadelSupply = 1_000_000;
    citadelData.set('supply', citadelSupply);
    const staked = 800_000;
    citadelData.set('staked', staked);
    const stakedPercent = (staked / citadelSupply) * 100;
    citadelData.set('stakedPercent', stakedPercent);
    citadelData.set('fundingBps', citadelTreasuryMock.fundingBps);
    citadelData.set('stakingBps', citadelTreasuryMock.stakingBps);
    citadelData.set('lockingBps', citadelTreasuryMock.lockingBps);
    citadelData.set('stakingApr', citadelSummaryMock.stakingApr);
    citadelData.set('lockingApr', {
      overall: citadelSummaryMock.lockingApr,
      [CitadelRewardType.Citadel]: citadelSummaryMock.lockingAprSources[CitadelRewardType.Citadel],
      [CitadelRewardType.Funding]: citadelSummaryMock.lockingAprSources[CitadelRewardType.Funding],
      [CitadelRewardType.Tokens]: citadelSummaryMock.lockingAprSources[CitadelRewardType.Tokens],
      [CitadelRewardType.Yield]: citadelSummaryMock.lockingAprSources[CitadelRewardType.Yield],
    });
    citadelData.set('tokensPaid', citadelSummaryMock.tokensPaid);
    return new CitadelData(citadelData);
  }

  describe('loadTreasurySummary', () => {
    // TODO: incorporate citadel market cap + paid measurements here
    describe('given all available information', () => {
      it('returns a full treasury summary', async () => {
        jest.spyOn(treasuryUtils, 'queryTreasurySummary').mockImplementation(async () => treasurySummaryMock);
        const data = mockCitadelData();
        jest.spyOn(citadelUtils, 'queryCitadelData').mockImplementation(async () => data);
        mockPricing();
        const result = await service.loadTreasurySummary();
        const { price } = await getPrice(TOKENS.WBTC);
        citadelTreasuryMock.valueBtc = citadelTreasuryMock.value / price;
        citadelTreasuryMock.marketCapToTreasuryRatio = data.marketCapToTreasuryRatio;
        expect(result).toMatchObject(citadelTreasuryMock);
      });
    });
  });
});