/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface CvxRewardsInterface extends ethers.utils.Interface {
  functions: {
    'FEE_DENOMINATOR()': FunctionFragment;
    'addExtraReward(address)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'clearExtraRewards()': FunctionFragment;
    'crvDeposits()': FunctionFragment;
    'currentRewards()': FunctionFragment;
    'cvxCrvRewards()': FunctionFragment;
    'cvxCrvToken()': FunctionFragment;
    'donate(uint256)': FunctionFragment;
    'duration()': FunctionFragment;
    'earned(address)': FunctionFragment;
    'extraRewards(uint256)': FunctionFragment;
    'extraRewardsLength()': FunctionFragment;
    'getReward(bool)': FunctionFragment;
    'historicalRewards()': FunctionFragment;
    'lastTimeRewardApplicable()': FunctionFragment;
    'lastUpdateTime()': FunctionFragment;
    'newRewardRatio()': FunctionFragment;
    'operator()': FunctionFragment;
    'periodFinish()': FunctionFragment;
    'queueNewRewards(uint256)': FunctionFragment;
    'queuedRewards()': FunctionFragment;
    'rewardManager()': FunctionFragment;
    'rewardPerToken()': FunctionFragment;
    'rewardPerTokenStored()': FunctionFragment;
    'rewardRate()': FunctionFragment;
    'rewardToken()': FunctionFragment;
    'rewards(address)': FunctionFragment;
    'stake(uint256)': FunctionFragment;
    'stakeAll()': FunctionFragment;
    'stakeFor(address,uint256)': FunctionFragment;
    'stakingToken()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'userRewardPerTokenPaid(address)': FunctionFragment;
    'withdraw(uint256,bool)': FunctionFragment;
    'withdrawAll(bool)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'FEE_DENOMINATOR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addExtraReward', values: [string]): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'clearExtraRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'crvDeposits', values?: undefined): string;
  encodeFunctionData(functionFragment: 'currentRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cvxCrvRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cvxCrvToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'donate', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'duration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'earned', values: [string]): string;
  encodeFunctionData(functionFragment: 'extraRewards', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'extraRewardsLength', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getReward', values: [boolean]): string;
  encodeFunctionData(functionFragment: 'historicalRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastTimeRewardApplicable', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastUpdateTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'newRewardRatio', values?: undefined): string;
  encodeFunctionData(functionFragment: 'operator', values?: undefined): string;
  encodeFunctionData(functionFragment: 'periodFinish', values?: undefined): string;
  encodeFunctionData(functionFragment: 'queueNewRewards', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'queuedRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardPerTokenStored', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewards', values: [string]): string;
  encodeFunctionData(functionFragment: 'stake', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'stakeAll', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stakeFor', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'stakingToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userRewardPerTokenPaid', values: [string]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish, boolean]): string;
  encodeFunctionData(functionFragment: 'withdrawAll', values: [boolean]): string;

  decodeFunctionResult(functionFragment: 'FEE_DENOMINATOR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addExtraReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'clearExtraRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'crvDeposits', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cvxCrvRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cvxCrvToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'donate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'duration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earned', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'extraRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'extraRewardsLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'historicalRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastTimeRewardApplicable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastUpdateTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'newRewardRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'operator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'periodFinish', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queueNewRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queuedRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerTokenStored', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakeAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakeFor', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakingToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userRewardPerTokenPaid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawAll', data: BytesLike): Result;

  events: {
    'RewardAdded(uint256)': EventFragment;
    'RewardPaid(address,uint256)': EventFragment;
    'Staked(address,uint256)': EventFragment;
    'Withdrawn(address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'RewardAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardPaid'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Staked'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdrawn'): EventFragment;
}

export class CvxRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CvxRewardsInterface;

  functions: {
    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    addExtraReward(
      _reward: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    clearExtraRewards(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    crvDeposits(overrides?: CallOverrides): Promise<[string]>;

    currentRewards(overrides?: CallOverrides): Promise<[BigNumber]>;

    cvxCrvRewards(overrides?: CallOverrides): Promise<[string]>;

    cvxCrvToken(overrides?: CallOverrides): Promise<[string]>;

    donate(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    earned(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    extraRewardsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    'getReward(bool)'(
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'getReward(address,bool,bool)'(
      _account: string,
      _claimExtras: boolean,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    historicalRewards(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    newRewardRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;

    queueNewRewards(
      _rewards: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    queuedRewards(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardManager(overrides?: CallOverrides): Promise<[string]>;

    rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    stakeAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    stakeFor(
      _for: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      _amount: BigNumberish,
      claim: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdrawAll(
      claim: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

  addExtraReward(
    _reward: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  clearExtraRewards(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  crvDeposits(overrides?: CallOverrides): Promise<string>;

  currentRewards(overrides?: CallOverrides): Promise<BigNumber>;

  cvxCrvRewards(overrides?: CallOverrides): Promise<string>;

  cvxCrvToken(overrides?: CallOverrides): Promise<string>;

  donate(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;

  'getReward(bool)'(
    _stake: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'getReward(address,bool,bool)'(
    _account: string,
    _claimExtras: boolean,
    _stake: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;

  lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  newRewardRatio(overrides?: CallOverrides): Promise<BigNumber>;

  operator(overrides?: CallOverrides): Promise<string>;

  periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

  queueNewRewards(
    _rewards: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;

  rewardManager(overrides?: CallOverrides): Promise<string>;

  rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

  rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  stake(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  stakeAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  stakeFor(
    _for: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    _amount: BigNumberish,
    claim: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdrawAll(
    claim: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    addExtraReward(_reward: string, overrides?: CallOverrides): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    clearExtraRewards(overrides?: CallOverrides): Promise<void>;

    crvDeposits(overrides?: CallOverrides): Promise<string>;

    currentRewards(overrides?: CallOverrides): Promise<BigNumber>;

    cvxCrvRewards(overrides?: CallOverrides): Promise<string>;

    cvxCrvToken(overrides?: CallOverrides): Promise<string>;

    donate(_amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;

    'getReward(bool)'(_stake: boolean, overrides?: CallOverrides): Promise<void>;

    'getReward(address,bool,bool)'(
      _account: string,
      _claimExtras: boolean,
      _stake: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    newRewardRatio(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<string>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    queueNewRewards(_rewards: BigNumberish, overrides?: CallOverrides): Promise<void>;

    queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;

    rewardManager(overrides?: CallOverrides): Promise<string>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    stake(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeAll(overrides?: CallOverrides): Promise<void>;

    stakeFor(_for: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(_amount: BigNumberish, claim: boolean, overrides?: CallOverrides): Promise<void>;

    withdrawAll(claim: boolean, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    RewardAdded(reward?: null): TypedEventFilter<[BigNumber], { reward: BigNumber }>;

    RewardPaid(
      user?: string | null,
      reward?: null,
    ): TypedEventFilter<[string, BigNumber], { user: string; reward: BigNumber }>;

    Staked(
      user?: string | null,
      amount?: null,
    ): TypedEventFilter<[string, BigNumber], { user: string; amount: BigNumber }>;

    Withdrawn(
      user?: string | null,
      amount?: null,
    ): TypedEventFilter<[string, BigNumber], { user: string; amount: BigNumber }>;
  };

  estimateGas: {
    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    addExtraReward(_reward: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    clearExtraRewards(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    crvDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    currentRewards(overrides?: CallOverrides): Promise<BigNumber>;

    cvxCrvRewards(overrides?: CallOverrides): Promise<BigNumber>;

    cvxCrvToken(overrides?: CallOverrides): Promise<BigNumber>;

    donate(_amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    extraRewardsLength(overrides?: CallOverrides): Promise<BigNumber>;

    'getReward(bool)'(_stake: boolean, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'getReward(address,bool,bool)'(
      _account: string,
      _claimExtras: boolean,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    newRewardRatio(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;

    queueNewRewards(
      _rewards: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;

    rewardManager(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;

    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    stake(_amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    stakeAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    stakeFor(
      _for: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      claim: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    withdrawAll(claim: boolean, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addExtraReward(
      _reward: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    clearExtraRewards(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    crvDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvxCrvRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvxCrvToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    donate(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    extraRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    extraRewardsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getReward(bool)'(
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'getReward(address,bool,bool)'(
      _account: string,
      _claimExtras: boolean,
      _stake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    historicalRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newRewardRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queueNewRewards(
      _rewards: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    queuedRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerTokenStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    stakeAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    stakeFor(
      _for: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userRewardPerTokenPaid(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      claim: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdrawAll(
      claim: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
