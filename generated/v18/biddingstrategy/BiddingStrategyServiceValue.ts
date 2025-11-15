import { z } from 'zod';

import { BiddingStrategy } from './BiddingStrategy';
import { Error } from './Error';

export const BiddingStrategyServiceValue = z.object({
  biddingStrategy: BiddingStrategy,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BiddingStrategyServiceValue = z.infer<typeof BiddingStrategyServiceValue>;
