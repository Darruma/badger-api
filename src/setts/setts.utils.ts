import { between } from '@aws/dynamodb-expressions';
import { NotFound } from '@tsed/exceptions';
import { ethers } from 'ethers';
import { GraphQLClient } from 'graphql-request';
import { getDataMapper } from '../aws/dynamodb.utils';
import { Chain } from '../chains/config/chain.config';
import { ONE_YEAR_MS, SAMPLE_DAYS } from '../config/constants';
import { SettState } from '../config/enums/sett-state.enum';
import { getSdk, SettQuery } from '../graphql/generated/badger';
import { getToken } from '../tokens/tokens.utils';
import { CachedSettSnapshot } from './interfaces/cached-sett-snapshot.interface';
import { Sett } from './interfaces/sett.interface';
import { SettDefinition } from './interfaces/sett-definition.interface';
import { SettSnapshot } from './interfaces/sett-snapshot.interface';
import { SettSnapshot2 } from './interfaces/sett-snapshot2.interface';

export const VAULT_SOURCE = 'Vault Compounding';

export const defaultSett = (settDefinition: SettDefinition): Sett => {
  const assetToken = getToken(settDefinition.depositToken);
  return {
    asset: assetToken.symbol,
    apr: 0,
    balance: 0,
    boostable: false,
    deprecated: !!settDefinition.deprecated,
    experimental: !!settDefinition.experimental,
    hasBouncer: !!settDefinition.hasBouncer,
    name: settDefinition.name,
    ppfs: 1,
    sources: [],
    state: settDefinition.state ?? SettState.Open,
    tokens: [],
    underlyingToken: settDefinition.depositToken,
    value: 0,
    vaultToken: settDefinition.settToken,
  };
};

export const getSett = async (graphUrl: string, contract: string, block?: number): Promise<SettQuery> => {
  const badgerGraphqlClient = new GraphQLClient(graphUrl);
  const badgerGraphqlSdk = getSdk(badgerGraphqlClient);
  const settId = contract.toLowerCase();
  const vars = { id: settId };
  if (block) {
    return badgerGraphqlSdk.SettSnapshot({ ...vars, block: { number: block } });
  }
  return badgerGraphqlSdk.Sett(vars);
};

export const getCachedSett = async (settDefinition: SettDefinition): Promise<Sett> => {
  const sett = defaultSett(settDefinition);
  try {
    const mapper = getDataMapper();
    for await (const item of mapper.query(
      CachedSettSnapshot,
      { address: settDefinition.settToken },
      { limit: 1, scanIndexForward: false },
    )) {
      sett.balance = item.balance;
      sett.value = item.settValue;
      if (item.balance === 0 || item.supply === 0) {
        sett.ppfs = 1;
      } else {
        sett.ppfs = item.balance / item.supply;
      }
    }
    return sett;
  } catch (err) {
    console.error(err);
    return sett;
  }
};

export const getSettSnapshots = async (settDefinition: SettDefinition): Promise<SettSnapshot[]> => {
  try {
    const snapshots = [];
    const mapper = getDataMapper();
    const assetToken = getToken(settDefinition.settToken);
    for await (const snapshot of mapper.query(
      SettSnapshot2,
      { address: assetToken.address },
      { limit: SAMPLE_DAYS, scanIndexForward: false },
    )) {
      snapshots.push(snapshot);
    }
    return snapshots;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getSettSnapshotsInRange = async (
  settDefinition: SettDefinition,
  start: Date,
  end: Date,
): Promise<SettSnapshot[]> => {
  try {
    const snapshots = [];
    const mapper = getDataMapper();
    const assetToken = getToken(settDefinition.settToken);

    for await (const snapshot of mapper.query(
      SettSnapshot2,
      { address: assetToken.address, timestamp: between(start.getTime(), end.getTime()) },
      { scanIndexForward: false },
    )) {
      snapshots.push(snapshot);
    }
    return snapshots;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getSnapshot = (snapshots: SettSnapshot[], index: number): SettSnapshot => {
  if (snapshots.length <= index) {
    return snapshots[snapshots.length - 1];
  }
  return snapshots[index];
};

export const getPerformance = (current: SettSnapshot, initial: SettSnapshot): number => {
  const ratioDiff = current.ratio - initial.ratio;
  const timestampDiff = current.timestamp - initial.timestamp;
  const scalar = ONE_YEAR_MS / timestampDiff;
  const finalRatio = initial.ratio + scalar * ratioDiff;
  return ((finalRatio - initial.ratio) / initial.ratio) * 100;
};

export const getSettDefinition = (chain: Chain, contract: string): SettDefinition => {
  const contractAddress = ethers.utils.getAddress(contract);
  const settDefinition = chain.setts.find((s) => s.settToken === contractAddress);
  if (!settDefinition) {
    throw new NotFound(`${contract} is not a valid sett`);
  }
  return settDefinition;
};
