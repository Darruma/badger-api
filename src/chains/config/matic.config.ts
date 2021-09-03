import { BADGER_MATIC_URL } from '../../config/constants';
import { Protocol } from '../../config/enums/protocol.enum';
import { SettState } from '../../config/enums/sett-state.enum';
import rpc from '../../config/rpc.config';
import { TOKENS } from '../../config/tokens.config';
import { getCurveSettTokenBalance } from '../../protocols/strategies/convex.strategy';
import { SettDefinition } from '../../setts/interfaces/sett-definition.interface';
import { maticTokensConfig } from '../../tokens/config/matic-tokens.config';
import { ChainNetwork } from '../enums/chain-network.enum';
import { MaticStrategy } from '../strategies/matic.strategy';
import { Chain } from './chain.config';

export class Polygon extends Chain {
  constructor() {
    super(
      'Polygon',
      'matic',
      '0x89',
      ChainNetwork.Matic,
      maticTokensConfig,
      maticSetts,
      rpc[ChainNetwork.Matic],
      new MaticStrategy(Object.keys(maticTokensConfig)),
      BADGER_MATIC_URL,
      15768000,
      '0x2C798FaFd37C7DCdcAc2498e19432898Bc51376b',
      '0xd0ee2a5108b8800d688abc834445fd03b3b2738e',
    );
    Chain.register(this.network, this);
  }
}

export const maticSetts: SettDefinition[] = [
  {
    name: 'Sushiswap Wrapped BTC/ibBTC',
    settToken: TOKENS.BMATIC_SUSHI_IBBTC_WBTC,
    depositToken: TOKENS.MATIC_SUSHI_IBBTC_WBTC,
    createdBlock: 17580716,
    experimental: true,
    hasBouncer: true,
    protocol: Protocol.Sushiswap,
    state: SettState.Experimental,
    strategy: '0xDed61Bd8a8c90596D8A6Cf0e678dA04036146963',
  },
  {
    name: 'Quickswap Wrapped BTC/USDC',
    settToken: TOKENS.BMATIC_QUICK_USDC_WBTC,
    depositToken: TOKENS.MATIC_QUICK_USDC_WBTC,
    createdBlock: 17687004,
    experimental: true,
    hasBouncer: true,
    protocol: Protocol.Quickswap,
    state: SettState.Experimental,
    strategy: '0x809990849D53a5109e0cb9C446137793B9f6f1Eb',
  },
  {
    name: 'Curve Ren',
    settToken: TOKENS.BMATIC_CRV_AMWBTC,
    depositToken: TOKENS.MATIC_CRV_AMWBTC,
    getTokenBalance: getCurveSettTokenBalance,
    createdBlock: 17616741,
    experimental: true,
    hasBouncer: true,
    protocol: Protocol.Curve,
    state: SettState.Experimental,
    strategy: '0xF8F02D0d41C79a1973f65A440C98acAc7eAA8Dc1',
  },
];
