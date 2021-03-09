import { Service } from '@tsed/common';
import { GraphQLClient } from 'graphql-request';
import {
	getSdk,
	HarvestsQuery,
	HarvestsQueryVariables,
	Sdk as BadgerDaoGraphqlSdk,
} from '../graphql/generated/badger-dao';
import { BADGER_DAO_SUBGRAPH_URL } from '../config/constants';

@Service()
export class HarvestsService {
	private badgerDaoGraphqlSdk: BadgerDaoGraphqlSdk;

	constructor() {
		const badgerDaoGraphqlClient = new GraphQLClient(BADGER_DAO_SUBGRAPH_URL);
		this.badgerDaoGraphqlSdk = getSdk(badgerDaoGraphqlClient);
	}

	async listHarvests(options: HarvestsQueryVariables): Promise<HarvestsQuery> {
		return this.badgerDaoGraphqlSdk.Harvests(options);
	}
}
