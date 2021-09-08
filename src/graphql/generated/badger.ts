import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};

export type Erc20 = {
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
};

export type Erc20_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupply_not?: Maybe<Scalars['BigInt']>;
  totalSupply_gt?: Maybe<Scalars['BigInt']>;
  totalSupply_lt?: Maybe<Scalars['BigInt']>;
  totalSupply_gte?: Maybe<Scalars['BigInt']>;
  totalSupply_lte?: Maybe<Scalars['BigInt']>;
  totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Erc20_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query';
  registry?: Maybe<Registry>;
  registries: Array<Registry>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  sett?: Maybe<Sett>;
  setts: Array<Sett>;
  settSnapshot?: Maybe<SettSnapshot>;
  settSnapshots: Array<SettSnapshot>;
  userSettBalance?: Maybe<UserSettBalance>;
  userSettBalances: Array<UserSettBalance>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  user?: Maybe<User>;
  users: Array<User>;
  erc20?: Maybe<Erc20>;
  erc20S: Array<Erc20>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
  vaultBalance?: Maybe<VaultBalance>;
  vaultBalances: Array<VaultBalance>;
  snapshot?: Maybe<Snapshot>;
  snapshots: Array<Snapshot>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type QueryRegistryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryRegistriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Registry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Registry_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
};

export type QuerySettArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QuerySettsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Sett_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Sett_Filter>;
  block?: Maybe<Block_Height>;
};

export type QuerySettSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QuerySettSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettSnapshot_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryUserSettBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryUserSettBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserSettBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserSettBalance_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryErc20Args = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryErc20SArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Erc20_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Erc20_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryVaultArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryVaultsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Vault_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Vault_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryVaultBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryVaultBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultBalance_Filter>;
  block?: Maybe<Block_Height>;
};

export type QuerySnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QuerySnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Snapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Snapshot_Filter>;
  block?: Maybe<Block_Height>;
};

export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Registry = {
  __typename?: 'Registry';
  id: Scalars['ID'];
};

export type Registry_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum Registry_OrderBy {
  Id = 'id',
}

export type Sett = Erc20 &
  Vault &
  VaultBalance & {
    __typename?: 'Sett';
    id: Scalars['ID'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    decimals: Scalars['BigInt'];
    totalSupply: Scalars['BigInt'];
    token: Token;
    balance: Scalars['BigInt'];
    pricePerFullShare: Scalars['BigInt'];
    netDeposit: Scalars['BigInt'];
    netShareDeposit: Scalars['BigInt'];
    grossDeposit: Scalars['BigInt'];
    grossShareDeposit: Scalars['BigInt'];
    grossWithdraw: Scalars['BigInt'];
    grossShareWithdraw: Scalars['BigInt'];
  };

export type SettSnapshot = Erc20 &
  Vault &
  VaultBalance &
  Snapshot & {
    __typename?: 'SettSnapshot';
    id: Scalars['ID'];
    timestamp: Scalars['Int'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    decimals: Scalars['BigInt'];
    totalSupply: Scalars['BigInt'];
    token: Token;
    balance: Scalars['BigInt'];
    pricePerFullShare: Scalars['BigInt'];
    netDeposit: Scalars['BigInt'];
    netShareDeposit: Scalars['BigInt'];
    grossDeposit: Scalars['BigInt'];
    grossShareDeposit: Scalars['BigInt'];
    grossWithdraw: Scalars['BigInt'];
    grossShareWithdraw: Scalars['BigInt'];
  };

export type SettSnapshot_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupply_not?: Maybe<Scalars['BigInt']>;
  totalSupply_gt?: Maybe<Scalars['BigInt']>;
  totalSupply_lt?: Maybe<Scalars['BigInt']>;
  totalSupply_gte?: Maybe<Scalars['BigInt']>;
  totalSupply_lte?: Maybe<Scalars['BigInt']>;
  totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pricePerFullShare?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_not?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_gt?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_lt?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_gte?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_lte?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_in?: Maybe<Array<Scalars['BigInt']>>;
  pricePerFullShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
  netDeposit?: Maybe<Scalars['BigInt']>;
  netDeposit_not?: Maybe<Scalars['BigInt']>;
  netDeposit_gt?: Maybe<Scalars['BigInt']>;
  netDeposit_lt?: Maybe<Scalars['BigInt']>;
  netDeposit_gte?: Maybe<Scalars['BigInt']>;
  netDeposit_lte?: Maybe<Scalars['BigInt']>;
  netDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  netDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  netShareDeposit?: Maybe<Scalars['BigInt']>;
  netShareDeposit_not?: Maybe<Scalars['BigInt']>;
  netShareDeposit_gt?: Maybe<Scalars['BigInt']>;
  netShareDeposit_lt?: Maybe<Scalars['BigInt']>;
  netShareDeposit_gte?: Maybe<Scalars['BigInt']>;
  netShareDeposit_lte?: Maybe<Scalars['BigInt']>;
  netShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  netShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossDeposit?: Maybe<Scalars['BigInt']>;
  grossDeposit_not?: Maybe<Scalars['BigInt']>;
  grossDeposit_gt?: Maybe<Scalars['BigInt']>;
  grossDeposit_lt?: Maybe<Scalars['BigInt']>;
  grossDeposit_gte?: Maybe<Scalars['BigInt']>;
  grossDeposit_lte?: Maybe<Scalars['BigInt']>;
  grossDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  grossDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareDeposit?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_not?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_gt?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_lt?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_gte?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_lte?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossWithdraw?: Maybe<Scalars['BigInt']>;
  grossWithdraw_not?: Maybe<Scalars['BigInt']>;
  grossWithdraw_gt?: Maybe<Scalars['BigInt']>;
  grossWithdraw_lt?: Maybe<Scalars['BigInt']>;
  grossWithdraw_gte?: Maybe<Scalars['BigInt']>;
  grossWithdraw_lte?: Maybe<Scalars['BigInt']>;
  grossWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
  grossWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_not?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_gt?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_lt?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_gte?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_lte?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum SettSnapshot_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
  Token = 'token',
  Balance = 'balance',
  PricePerFullShare = 'pricePerFullShare',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossWithdraw = 'grossWithdraw',
  GrossShareWithdraw = 'grossShareWithdraw',
}

export type Sett_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupply_not?: Maybe<Scalars['BigInt']>;
  totalSupply_gt?: Maybe<Scalars['BigInt']>;
  totalSupply_lt?: Maybe<Scalars['BigInt']>;
  totalSupply_gte?: Maybe<Scalars['BigInt']>;
  totalSupply_lte?: Maybe<Scalars['BigInt']>;
  totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pricePerFullShare?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_not?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_gt?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_lt?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_gte?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_lte?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_in?: Maybe<Array<Scalars['BigInt']>>;
  pricePerFullShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
  netDeposit?: Maybe<Scalars['BigInt']>;
  netDeposit_not?: Maybe<Scalars['BigInt']>;
  netDeposit_gt?: Maybe<Scalars['BigInt']>;
  netDeposit_lt?: Maybe<Scalars['BigInt']>;
  netDeposit_gte?: Maybe<Scalars['BigInt']>;
  netDeposit_lte?: Maybe<Scalars['BigInt']>;
  netDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  netDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  netShareDeposit?: Maybe<Scalars['BigInt']>;
  netShareDeposit_not?: Maybe<Scalars['BigInt']>;
  netShareDeposit_gt?: Maybe<Scalars['BigInt']>;
  netShareDeposit_lt?: Maybe<Scalars['BigInt']>;
  netShareDeposit_gte?: Maybe<Scalars['BigInt']>;
  netShareDeposit_lte?: Maybe<Scalars['BigInt']>;
  netShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  netShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossDeposit?: Maybe<Scalars['BigInt']>;
  grossDeposit_not?: Maybe<Scalars['BigInt']>;
  grossDeposit_gt?: Maybe<Scalars['BigInt']>;
  grossDeposit_lt?: Maybe<Scalars['BigInt']>;
  grossDeposit_gte?: Maybe<Scalars['BigInt']>;
  grossDeposit_lte?: Maybe<Scalars['BigInt']>;
  grossDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  grossDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareDeposit?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_not?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_gt?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_lt?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_gte?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_lte?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossWithdraw?: Maybe<Scalars['BigInt']>;
  grossWithdraw_not?: Maybe<Scalars['BigInt']>;
  grossWithdraw_gt?: Maybe<Scalars['BigInt']>;
  grossWithdraw_lt?: Maybe<Scalars['BigInt']>;
  grossWithdraw_gte?: Maybe<Scalars['BigInt']>;
  grossWithdraw_lte?: Maybe<Scalars['BigInt']>;
  grossWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
  grossWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_not?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_gt?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_lt?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_gte?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_lte?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Sett_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
  Token = 'token',
  Balance = 'balance',
  PricePerFullShare = 'pricePerFullShare',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossWithdraw = 'grossWithdraw',
  GrossShareWithdraw = 'grossShareWithdraw',
}

export type Snapshot = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
};

export type Snapshot_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum Snapshot_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
}

export type Subscription = {
  __typename?: 'Subscription';
  registry?: Maybe<Registry>;
  registries: Array<Registry>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  sett?: Maybe<Sett>;
  setts: Array<Sett>;
  settSnapshot?: Maybe<SettSnapshot>;
  settSnapshots: Array<SettSnapshot>;
  userSettBalance?: Maybe<UserSettBalance>;
  userSettBalances: Array<UserSettBalance>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  user?: Maybe<User>;
  users: Array<User>;
  erc20?: Maybe<Erc20>;
  erc20S: Array<Erc20>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
  vaultBalance?: Maybe<VaultBalance>;
  vaultBalances: Array<VaultBalance>;
  snapshot?: Maybe<Snapshot>;
  snapshots: Array<Snapshot>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type SubscriptionRegistryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionRegistriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Registry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Registry_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionSettArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionSettsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Sett_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Sett_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionSettSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionSettSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettSnapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SettSnapshot_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionUserSettBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionUserSettBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserSettBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserSettBalance_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionTransferArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionTransfersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transfer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transfer_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionErc20Args = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionErc20SArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Erc20_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Erc20_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionVaultArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionVaultsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Vault_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Vault_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionVaultBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionVaultBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VaultBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VaultBalance_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionSnapshotArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionSnapshotsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Snapshot_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Snapshot_Filter>;
  block?: Maybe<Block_Height>;
};

export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Token = Erc20 & {
  __typename?: 'Token';
  id: Scalars['ID'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  decimals: Scalars['BigInt'];
  totalSupply: Scalars['BigInt'];
};

export type Token_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['BigInt']>;
  decimals_not?: Maybe<Scalars['BigInt']>;
  decimals_gt?: Maybe<Scalars['BigInt']>;
  decimals_lt?: Maybe<Scalars['BigInt']>;
  decimals_gte?: Maybe<Scalars['BigInt']>;
  decimals_lte?: Maybe<Scalars['BigInt']>;
  decimals_in?: Maybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupply_not?: Maybe<Scalars['BigInt']>;
  totalSupply_gt?: Maybe<Scalars['BigInt']>;
  totalSupply_lt?: Maybe<Scalars['BigInt']>;
  totalSupply_gte?: Maybe<Scalars['BigInt']>;
  totalSupply_lte?: Maybe<Scalars['BigInt']>;
  totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Token_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  TotalSupply = 'totalSupply',
}

export type Transfer = Snapshot & {
  __typename?: 'Transfer';
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  from: Scalars['String'];
  to: Scalars['String'];
  amount: Scalars['BigInt'];
};

export type Transfer_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
  from?: Maybe<Scalars['String']>;
  from_not?: Maybe<Scalars['String']>;
  from_gt?: Maybe<Scalars['String']>;
  from_lt?: Maybe<Scalars['String']>;
  from_gte?: Maybe<Scalars['String']>;
  from_lte?: Maybe<Scalars['String']>;
  from_in?: Maybe<Array<Scalars['String']>>;
  from_not_in?: Maybe<Array<Scalars['String']>>;
  from_contains?: Maybe<Scalars['String']>;
  from_not_contains?: Maybe<Scalars['String']>;
  from_starts_with?: Maybe<Scalars['String']>;
  from_not_starts_with?: Maybe<Scalars['String']>;
  from_ends_with?: Maybe<Scalars['String']>;
  from_not_ends_with?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  to_not?: Maybe<Scalars['String']>;
  to_gt?: Maybe<Scalars['String']>;
  to_lt?: Maybe<Scalars['String']>;
  to_gte?: Maybe<Scalars['String']>;
  to_lte?: Maybe<Scalars['String']>;
  to_in?: Maybe<Array<Scalars['String']>>;
  to_not_in?: Maybe<Array<Scalars['String']>>;
  to_contains?: Maybe<Scalars['String']>;
  to_not_contains?: Maybe<Scalars['String']>;
  to_starts_with?: Maybe<Scalars['String']>;
  to_not_starts_with?: Maybe<Scalars['String']>;
  to_ends_with?: Maybe<Scalars['String']>;
  to_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Transfer_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  From = 'from',
  To = 'to',
  Amount = 'amount',
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  settBalances: Array<UserSettBalance>;
};

export type UserSettBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserSettBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserSettBalance_Filter>;
};

export type UserSettBalance = VaultBalance & {
  __typename?: 'UserSettBalance';
  id: Scalars['ID'];
  user: User;
  sett: Sett;
  netDeposit: Scalars['BigInt'];
  netShareDeposit: Scalars['BigInt'];
  grossDeposit: Scalars['BigInt'];
  grossShareDeposit: Scalars['BigInt'];
  grossWithdraw: Scalars['BigInt'];
  grossShareWithdraw: Scalars['BigInt'];
};

export type UserSettBalance_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  sett?: Maybe<Scalars['String']>;
  sett_not?: Maybe<Scalars['String']>;
  sett_gt?: Maybe<Scalars['String']>;
  sett_lt?: Maybe<Scalars['String']>;
  sett_gte?: Maybe<Scalars['String']>;
  sett_lte?: Maybe<Scalars['String']>;
  sett_in?: Maybe<Array<Scalars['String']>>;
  sett_not_in?: Maybe<Array<Scalars['String']>>;
  sett_contains?: Maybe<Scalars['String']>;
  sett_not_contains?: Maybe<Scalars['String']>;
  sett_starts_with?: Maybe<Scalars['String']>;
  sett_not_starts_with?: Maybe<Scalars['String']>;
  sett_ends_with?: Maybe<Scalars['String']>;
  sett_not_ends_with?: Maybe<Scalars['String']>;
  netDeposit?: Maybe<Scalars['BigInt']>;
  netDeposit_not?: Maybe<Scalars['BigInt']>;
  netDeposit_gt?: Maybe<Scalars['BigInt']>;
  netDeposit_lt?: Maybe<Scalars['BigInt']>;
  netDeposit_gte?: Maybe<Scalars['BigInt']>;
  netDeposit_lte?: Maybe<Scalars['BigInt']>;
  netDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  netDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  netShareDeposit?: Maybe<Scalars['BigInt']>;
  netShareDeposit_not?: Maybe<Scalars['BigInt']>;
  netShareDeposit_gt?: Maybe<Scalars['BigInt']>;
  netShareDeposit_lt?: Maybe<Scalars['BigInt']>;
  netShareDeposit_gte?: Maybe<Scalars['BigInt']>;
  netShareDeposit_lte?: Maybe<Scalars['BigInt']>;
  netShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  netShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossDeposit?: Maybe<Scalars['BigInt']>;
  grossDeposit_not?: Maybe<Scalars['BigInt']>;
  grossDeposit_gt?: Maybe<Scalars['BigInt']>;
  grossDeposit_lt?: Maybe<Scalars['BigInt']>;
  grossDeposit_gte?: Maybe<Scalars['BigInt']>;
  grossDeposit_lte?: Maybe<Scalars['BigInt']>;
  grossDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  grossDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareDeposit?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_not?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_gt?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_lt?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_gte?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_lte?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossWithdraw?: Maybe<Scalars['BigInt']>;
  grossWithdraw_not?: Maybe<Scalars['BigInt']>;
  grossWithdraw_gt?: Maybe<Scalars['BigInt']>;
  grossWithdraw_lt?: Maybe<Scalars['BigInt']>;
  grossWithdraw_gte?: Maybe<Scalars['BigInt']>;
  grossWithdraw_lte?: Maybe<Scalars['BigInt']>;
  grossWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
  grossWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_not?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_gt?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_lt?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_gte?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_lte?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum UserSettBalance_OrderBy {
  Id = 'id',
  User = 'user',
  Sett = 'sett',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossWithdraw = 'grossWithdraw',
  GrossShareWithdraw = 'grossShareWithdraw',
}

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum User_OrderBy {
  Id = 'id',
  SettBalances = 'settBalances',
}

export type Vault = {
  id: Scalars['ID'];
  token: Token;
  balance: Scalars['BigInt'];
  pricePerFullShare: Scalars['BigInt'];
};

export type VaultBalance = {
  id: Scalars['ID'];
  netDeposit: Scalars['BigInt'];
  netShareDeposit: Scalars['BigInt'];
  grossDeposit: Scalars['BigInt'];
  grossShareDeposit: Scalars['BigInt'];
  grossWithdraw: Scalars['BigInt'];
  grossShareWithdraw: Scalars['BigInt'];
};

export type VaultBalance_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  netDeposit?: Maybe<Scalars['BigInt']>;
  netDeposit_not?: Maybe<Scalars['BigInt']>;
  netDeposit_gt?: Maybe<Scalars['BigInt']>;
  netDeposit_lt?: Maybe<Scalars['BigInt']>;
  netDeposit_gte?: Maybe<Scalars['BigInt']>;
  netDeposit_lte?: Maybe<Scalars['BigInt']>;
  netDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  netDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  netShareDeposit?: Maybe<Scalars['BigInt']>;
  netShareDeposit_not?: Maybe<Scalars['BigInt']>;
  netShareDeposit_gt?: Maybe<Scalars['BigInt']>;
  netShareDeposit_lt?: Maybe<Scalars['BigInt']>;
  netShareDeposit_gte?: Maybe<Scalars['BigInt']>;
  netShareDeposit_lte?: Maybe<Scalars['BigInt']>;
  netShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  netShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossDeposit?: Maybe<Scalars['BigInt']>;
  grossDeposit_not?: Maybe<Scalars['BigInt']>;
  grossDeposit_gt?: Maybe<Scalars['BigInt']>;
  grossDeposit_lt?: Maybe<Scalars['BigInt']>;
  grossDeposit_gte?: Maybe<Scalars['BigInt']>;
  grossDeposit_lte?: Maybe<Scalars['BigInt']>;
  grossDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  grossDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareDeposit?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_not?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_gt?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_lt?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_gte?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_lte?: Maybe<Scalars['BigInt']>;
  grossShareDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossWithdraw?: Maybe<Scalars['BigInt']>;
  grossWithdraw_not?: Maybe<Scalars['BigInt']>;
  grossWithdraw_gt?: Maybe<Scalars['BigInt']>;
  grossWithdraw_lt?: Maybe<Scalars['BigInt']>;
  grossWithdraw_gte?: Maybe<Scalars['BigInt']>;
  grossWithdraw_lte?: Maybe<Scalars['BigInt']>;
  grossWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
  grossWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_not?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_gt?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_lt?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_gte?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_lte?: Maybe<Scalars['BigInt']>;
  grossShareWithdraw_in?: Maybe<Array<Scalars['BigInt']>>;
  grossShareWithdraw_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum VaultBalance_OrderBy {
  Id = 'id',
  NetDeposit = 'netDeposit',
  NetShareDeposit = 'netShareDeposit',
  GrossDeposit = 'grossDeposit',
  GrossShareDeposit = 'grossShareDeposit',
  GrossWithdraw = 'grossWithdraw',
  GrossShareWithdraw = 'grossShareWithdraw',
}

export type Vault_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  pricePerFullShare?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_not?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_gt?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_lt?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_gte?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_lte?: Maybe<Scalars['BigInt']>;
  pricePerFullShare_in?: Maybe<Array<Scalars['BigInt']>>;
  pricePerFullShare_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Vault_OrderBy {
  Id = 'id',
  Token = 'token',
  Balance = 'balance',
  PricePerFullShare = 'pricePerFullShare',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export const SettFragmentDoc = gql`
  fragment Sett on Sett {
    id
    token {
      id
      decimals
    }
    balance
    netDeposit
    netShareDeposit
    pricePerFullShare
    totalSupply
  }
`;
export const UserSettBalanceFragmentDoc = gql`
  fragment UserSettBalance on UserSettBalance {
    sett {
      id
      name
      balance
      totalSupply
      netShareDeposit
      pricePerFullShare
      symbol
      token {
        id
        decimals
      }
    }
    netDeposit
    grossDeposit
    grossWithdraw
    netShareDeposit
    grossShareDeposit
    grossShareWithdraw
  }
`;
export const UserFragmentDoc = gql`
  fragment User on User {
    id
    settBalances {
      id
      sett {
        id
        name
      }
      netDeposit
      netShareDeposit
      grossDeposit
      grossShareDeposit
      grossWithdraw
      grossShareWithdraw
    }
  }
`;
export const SettSnapshotDocument = gql`
  query SettSnapshot($id: ID!, $block: Block_height) {
    sett(id: $id, block: $block) {
      ...Sett
    }
  }
  ${SettFragmentDoc}
`;
export const SettDocument = gql`
  query Sett($id: ID!) {
    sett(id: $id) {
      ...Sett
    }
  }
  ${SettFragmentDoc}
`;
export const UserDocument = gql`
  query User($id: ID!, $orderDirection: OrderDirection!) {
    user(id: $id) {
      settBalances(orderDirection: $orderDirection) {
        ...UserSettBalance
      }
    }
  }
  ${UserSettBalanceFragmentDoc}
`;
export const UsersDocument = gql`
  query Users($first: Int, $where: User_filter, $orderBy: User_orderBy, $orderDirection: OrderDirection) {
    users(first: $first, where: $where, orderBy: $orderBy, orderDirection: $orderDirection) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    SettSnapshot(
      variables: SettSnapshotQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<SettSnapshotQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SettSnapshotQuery>(SettSnapshotDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'SettSnapshot',
      );
    },
    Sett(variables: SettQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<SettQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SettQuery>(SettDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'Sett',
      );
    },
    User(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UserQuery>(UserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'User',
      );
    },
    Users(variables?: UsersQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<UsersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UsersQuery>(UsersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'Users',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type SettFragment = { __typename?: 'Sett' } & Pick<
  Sett,
  'id' | 'balance' | 'netDeposit' | 'netShareDeposit' | 'pricePerFullShare' | 'totalSupply'
> & { token: { __typename?: 'Token' } & Pick<Token, 'id' | 'decimals'> };

export type UserSettBalanceFragment = { __typename?: 'UserSettBalance' } & Pick<
  UserSettBalance,
  'netDeposit' | 'grossDeposit' | 'grossWithdraw' | 'netShareDeposit' | 'grossShareDeposit' | 'grossShareWithdraw'
> & {
    sett: { __typename?: 'Sett' } & Pick<
      Sett,
      'id' | 'name' | 'balance' | 'totalSupply' | 'netShareDeposit' | 'pricePerFullShare' | 'symbol'
    > & { token: { __typename?: 'Token' } & Pick<Token, 'id' | 'decimals'> };
  };

export type UserFragment = { __typename?: 'User' } & Pick<User, 'id'> & {
    settBalances: Array<
      { __typename?: 'UserSettBalance' } & Pick<
        UserSettBalance,
        | 'id'
        | 'netDeposit'
        | 'netShareDeposit'
        | 'grossDeposit'
        | 'grossShareDeposit'
        | 'grossWithdraw'
        | 'grossShareWithdraw'
      > & { sett: { __typename?: 'Sett' } & Pick<Sett, 'id' | 'name'> }
    >;
  };

export type SettSnapshotQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}>;

export type SettSnapshotQuery = { __typename?: 'Query' } & { sett?: Maybe<{ __typename?: 'Sett' } & SettFragment> };

export type SettQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type SettQuery = { __typename?: 'Query' } & { sett?: Maybe<{ __typename?: 'Sett' } & SettFragment> };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
  orderDirection: OrderDirection;
}>;

export type UserQuery = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'User' } & { settBalances: Array<{ __typename?: 'UserSettBalance' } & UserSettBalanceFragment> }
  >;
};

export type UsersQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  where?: Maybe<User_Filter>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
}>;

export type UsersQuery = { __typename?: 'Query' } & { users: Array<{ __typename?: 'User' } & UserFragment> };
