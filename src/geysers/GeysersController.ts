import { Controller, Get, QueryParams } from '@tsed/common';
import { ContentType } from '@tsed/schema';
import { resolveChainQuery } from '../config/chain';
import { Sett } from '../interface/Sett';
import { GeyserService } from './GeysersService';

@Controller('/geysers')
export class GeyserController {
	constructor(private geyserService: GeyserService) {}

	@Get()
	@ContentType('json')
	async listFarms(@QueryParams('chain') chain: string): Promise<Sett[]> {
		return this.geyserService.listFarms(resolveChainQuery(chain));
	}
}