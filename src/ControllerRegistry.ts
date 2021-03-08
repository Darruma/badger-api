import { ChartController } from './controller/ChartController';
import { ClawController } from './controller/ClawController';
import { GeyserController } from './geysers/GeysersController';
import { HarvestsController } from './harvests/HarvestsController';
import { PriceController } from './prices/PricesController';
import { ProtocolController } from './protocols/ProtocolsController';
import { RewardController } from './rewards/RewardsController';
import { SettController } from './setts/SettsController';

/**
 * Controller registry forces serverless offline to load
 * the appropriate controller routes on start. Default
 * lazy loading makes dealing with local development a pain
 * without this.
 */
export const controllers = [
	ChartController,
	ClawController,
	GeyserController,
	HarvestsController,
	PriceController,
	ProtocolController,
	RewardController,
	SettController,
];
