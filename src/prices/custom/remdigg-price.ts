import { Token } from '@badger-dao/sdk';
import { Chain } from '../../chains/config/chain.config';
import { TOKENS } from '../../config/tokens.config';
import { Digg__factory } from '../../contracts/factories/Digg__factory';
import { TokenPrice } from '../../tokens/interfaces/token-price.interface';
import { getPrice } from '../prices.utils';

const REMDIGG_PER_DIGG = 1e9;
const REMDIGG_SHARE_PER_FRAGMENT = '222256308823765331027878635805365830922307440079959220679625904457';

export async function getRemDiggPrice(chain: Chain, token: Token): Promise<TokenPrice> {
  const digg = Digg__factory.connect(TOKENS.DIGG, chain.batchProvider);
  const [diggPrice, sharePerFragment] = await Promise.all([getPrice(TOKENS.DIGG), digg._sharesPerFragment()]);
  const scalar = sharePerFragment.mul(REMDIGG_PER_DIGG).div(REMDIGG_SHARE_PER_FRAGMENT).toNumber() / REMDIGG_PER_DIGG;
  return {
    name: token.name,
    address: token.address,
    usd: diggPrice.usd * scalar,
    eth: diggPrice.eth * scalar,
  };
}