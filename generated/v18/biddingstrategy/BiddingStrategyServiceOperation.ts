import { z } from 'zod';

import { BiddingStrategy } from './BiddingStrategy';

export const BiddingStrategyServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(BiddingStrategy).nullable()
}).nullable();

export type BiddingStrategyServiceOperation = z.infer<typeof BiddingStrategyServiceOperation>;
