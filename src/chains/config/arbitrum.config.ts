import { BADGER_ARBITRUM_URL } from '../../config/constants';
import { Protocol } from '../../config/enums/protocol.enum';
import { SettState } from '../../config/enums/sett-state.enum';
import rpc from '../../config/rpc.config';
import { TOKENS } from '../../config/tokens.config';
import { SettDefinition } from '../../setts/interfaces/sett-definition.interface';
import { arbitrumTokensConfig } from '../../tokens/config/arbitrum-tokens.config';
import { ChainNetwork } from '../enums/chain-network.enum';
import { ArbitrumStrategy } from '../strategies/arbitrum.strategy';
import { Chain } from './chain.config';

export class Arbitrum extends Chain {
  constructor() {
    super(
      'Arbitrum',
      'arbitrum',
      '0xa4b1',
      ChainNetwork.Arbitrum,
      arbitrumTokensConfig,
      arbitrumSetts,
      rpc[ChainNetwork.Arbitrum],
      new ArbitrumStrategy(Object.keys(arbitrumTokensConfig)),
      BADGER_ARBITRUM_URL,
      15768000,
      '0x663EfC293ca8d8DD6355AE6E99b71352BED9E895',
      '0x599D92B453C010b1050d31C364f6ee17E819f193',
    );
    Chain.register(this.network, this);
  }
}

export const arbitrumSetts: SettDefinition[] = [
  {
    name: 'Sushiswap Wrapped Ether/Sushi',
    settToken: TOKENS.BARB_SUSHI_WETH_SUSHI,
    depositToken: TOKENS.ARB_SUSHI_WETH_SUSHI,
    createdBlock: 17580716,
    experimental: true,
    hasBouncer: true,
    protocol: Protocol.Sushiswap,
    state: SettState.Experimental,
    strategy: '0x86f772C82914f5bFD168f99e208d0FC2C371e9C2',
  },
];