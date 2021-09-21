import { ChainNetwork } from '../chains/enums/chain-network.enum';
import * as gasUtils from './gas.utils';

describe('gas.utils', () => {
  beforeEach(() => {
    jest.spyOn(gasUtils, 'getGasCache').mockReturnValue(
      Promise.resolve({
        [ChainNetwork.Arbitrum]: { rapid: 2, fast: 2, standard: 2, slow: 2 },
        [ChainNetwork.Ethereum]: {
          rapid: { maxFeePerGas: 223.06, maxPriorityFeePerGas: 3.04 },
          fast: { maxFeePerGas: 221.96, maxPriorityFeePerGas: 1.94 },
          standard: { maxFeePerGas: 221.91, maxPriorityFeePerGas: 1.89 },
          slow: { maxFeePerGas: 221.81, maxPriorityFeePerGas: 1.79 },
        },
        [ChainNetwork.Matic]: { rapid: 38, fast: 33, standard: 33, slow: 33 },
        [ChainNetwork.BinanceSmartChain]: {
          rapid: 5,
          fast: 5,
          standard: 5,
          slow: 5,
        },
      }),
    );
  });

  describe('getGasPrices', () => {
    it('returns gas prices for all networks', async () => {
      const gasPrices = await gasUtils.getGasCache();
      expect(gasPrices).toMatchSnapshot();
    });
  });
});