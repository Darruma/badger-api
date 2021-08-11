import { attribute, hashKey, rangeKey, table } from '@aws/dynamodb-data-mapper-annotations';
import { SETT_DATA } from '../../config/constants';

@table(SETT_DATA)
export class SettSnapshot {
  @hashKey()
  address!: string;

  @rangeKey()
  height!: number;

  @attribute()
  timestamp!: number;

  @attribute()
  balance!: number;

  @attribute()
  supply!: number;

  @attribute()
  ratio!: number;

  @attribute()
  value!: number;
}
