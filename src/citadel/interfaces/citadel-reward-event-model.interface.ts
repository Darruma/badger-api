import { RewardEventType } from '@badger-dao/sdk/lib/citadel/enums/reward-event-type.enum';
import { RewardFilter } from '@badger-dao/sdk/lib/citadel/enums/reward-filter.enum';
import { Description, Example, Property, Title } from '@tsed/schema';
import { CitadelRewardEvent } from './citadel-reward-event.interface';

@Description('Citadel DAO Reward Event')
export class CitadelRewardEventModel implements CitadelRewardEvent {
  @Title('account')
  @Description('Acc addr on the network')
  @Example('0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28')
  @Property()
  account: string;

  @Title('block')
  @Description('At which reward was added')
  @Example('11123943')
  @Property()
  block: number;

  @Title('token')
  @Description('Token addr of the reward')
  @Example('0xaF0b1FDf9c6BfeC7b3512F207553c0BA00D7f1A2')
  @Property()
  token: string;

  @Title('amount')
  @Description('Amount of roken reward')
  @Example('100.2341')
  @Property()
  amount: number;

  @Title('type')
  @Description('State of reward event')
  @Example(RewardFilter.ADDED)
  @Property()
  payType: RewardEventType;

  @Title('dataType')
  @Description('Type of reward event')
  @Example('Hashed 32b string')
  @Property()
  dataType?: string;

  @Title('startTime')
  @Description('Timestamp, start of event')
  @Example(Date.now())
  @Property()
  startTime?: number;

  @Title('finishTime')
  @Description('Timestamp, finish of the event')
  @Example(RewardFilter.ADDED)
  @Property()
  finishTime?: number;

  constructor(summary: CitadelRewardEvent) {
    this.account = summary.account;
    this.block = summary.block;
    this.token = summary.token;
    this.amount = summary.amount;
    this.payType = summary.payType;
    this.dataType = summary.dataType;
    this.startTime = summary.startTime;
    this.finishTime = summary.finishTime;
  }
}