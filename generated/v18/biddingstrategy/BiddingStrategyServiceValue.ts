import { z } from 'zod';

import { biddingStrategy } from './BiddingStrategy';
import { error } from '../../common/Error';

export const biddingStrategyServiceValue = z.object({
  biddingStrategy: biddingStrategy,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BiddingStrategyServiceValue = z.infer<typeof biddingStrategyServiceValue>;
