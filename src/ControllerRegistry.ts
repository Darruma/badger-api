// Shared
import { ChartsController } from './charts/charts.controller';
import { GasController } from './gas/gas.controller';
import { LeaderBoardsController } from './leaderboards/leaderboards.controller';
import { MetricsController } from './metrics/metrics.controller';
import { PriceController } from './prices/prices.controller';
import { TokensController } from './tokens/tokens.controller';
import { ProtocolController } from './protocols/protocols.controller';

// V2 Deprecated
import { AccountsV2Controller } from './accounts/accounts.v2.controller';
import { RewardsV2Controller } from './rewards/rewards.v2.controller';
import { VaultsV2Controller } from './vaults/vaults.v2.controller';
import { SettsV2Controller } from './vaults/setts.v2.controller';
import { ProofsV2Controller } from './proofs/proofs.v2.controller';
import { RewardV2Controller } from './rewards/reward.v2.controller';

// V3 Current
import { AccountV3Controller } from './accounts/account.v3.controller';
import { ProofsV3Controller } from './proofs/proof.v3.controller';
import { RewardV3Controller } from './rewards/reward.v3.controller';
import { VaultsV3Controller } from './vaults/vault.v3.controller';

/**
 * Controller registry forces serverless offline to load
 * the appropriate controller routes on start. Default
 * lazy loading makes dealing with local development a pain
 * without this.
 */
export const V2_CONTROLLERS = [
  ChartsController,
  GasController,
  LeaderBoardsController,
  MetricsController,
  ProtocolController,
  PriceController,
  TokensController,

  SettsV2Controller,

  AccountsV2Controller,
  ProofsV2Controller,
  RewardV2Controller,
  RewardsV2Controller,
  VaultsV2Controller,
];

export const V3_CONTROLLERS = [
  ChartsController,
  GasController,
  LeaderBoardsController,
  MetricsController,
  PriceController,
  TokensController,

  AccountV3Controller,
  ProofsV3Controller,
  RewardV3Controller,
  VaultsV3Controller,
];
