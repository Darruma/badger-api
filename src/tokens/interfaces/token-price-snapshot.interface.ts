import { attribute, hashKey, rangeKey, table } from '@aws/dynamodb-data-mapper-annotations';
import { PRICE_DATA } from '../../config/constants';
import { TokenPrice } from './token-price.interface';

@table(PRICE_DATA)
export class TokenPriceSnapshot implements TokenPrice {
  @hashKey()
  address!: string;

  @attribute()
  price!: number;

  @rangeKey({ defaultProvider: () => Date.now() })
  updatedAt!: number;
}
