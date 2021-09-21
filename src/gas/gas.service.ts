import { Service } from '@tsed/common';
import { NotFound } from '@tsed/exceptions';
import { Chain } from '../chains/config/chain.config';
import { getGasCache } from './gas.utils';
import { GasPrices } from './interfaces/gas-prices.interface';

@Service()
export class GasService {
  /**
   * Attempt to retrieve the prices for a chain from the cache
   * if no value is in the cache, refresh prices for all chains
   * @param chain Gas price chain
   * @returns object of gas speeds and prices
   */
  async getGasPrices(chain: Chain): Promise<GasPrices> {
    try {
      const gasCache = await getGasCache();
      return gasCache[chain.network];
    } catch (error) {
      console.error(error);
      throw new NotFound(`Gas price for ${chain.name} not available`);
    }
  }
}