import fetchMock from 'jest-fetch-mock';
import { TokenPrice } from '../tokens/interfaces/token-price.interface';
import { getContractPrice, getTokenPrice, inCurrency } from './prices-util';

describe('prices-util', () => {
  beforeEach(fetchMock.resetMocks);

  it('Fetches the contract price in USD and ETH', async () => {
    const contract = '0x3472A5A71965499acd81997a54BBA8D852C6E53d';
    const usdPrice = Math.random() * 100;
    const etherPrice = usdPrice / 1500;
    const mockResponse = {
      '0x3472a5a71965499acd81997a54bba8d852c6e53d': {
        usd: usdPrice,
        eth: etherPrice,
      },
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const response = await getContractPrice(contract);

    expect(fetchMock).toHaveBeenCalled();
    expect(response).toBeDefined();
    expect(response).toMatchObject({
      address: contract,
      usd: usdPrice,
      eth: etherPrice,
    });
  });

  it('Fetches the token price in USD and ETH', async () => {
    const token = 'Badger';
    const usdPrice = Math.random() * 100;
    const etherPrice = usdPrice / 1500;
    const mockResponse = {
      Badger: {
        usd: usdPrice,
        eth: etherPrice,
      },
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const response = await getTokenPrice(token);

    expect(fetchMock).toHaveBeenCalled();
    expect(response).toBeDefined();
    expect(response).toMatchObject({
      name: token,
      usd: usdPrice,
      eth: etherPrice,
    });
  });

  describe('inCurrency', () => {
    const priceData: TokenPrice = {
      usd: 10,
      eth: 10 / 1500,
    };

    describe('without a currency', () => {
      it('returns the usd price', () => {
        const defaultPrice = inCurrency(priceData);
        expect(defaultPrice).toEqual(priceData.usd);
      });
    });

    describe('with usd selected', () => {
      it('returns the usd price', () => {
        const defaultPrice = inCurrency(priceData, 'usd');
        expect(defaultPrice).toEqual(priceData.usd);
      });
    });

    describe('with eth selected', () => {
      it('returns the eth price', () => {
        const ethPrice = inCurrency(priceData, 'eth');
        expect(ethPrice).toEqual(priceData.eth);
      });
    });

    describe('with an unsupported currency', () => {
      it('returns the usd price', () => {
        const ethPrice = inCurrency(priceData, 'bchabc');
        expect(ethPrice).toEqual(priceData.usd);
      });
    });
  });
});