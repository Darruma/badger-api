import { Protocol, TokenValue } from '@badger-dao/sdk';

export interface TreasuryPosition extends TokenValue {
  protocol: Protocol | string;
  apr: number;
}
