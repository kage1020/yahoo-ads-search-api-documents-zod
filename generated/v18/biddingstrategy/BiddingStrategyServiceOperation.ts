import { z } from 'zod';

import { biddingStrategy } from './BiddingStrategy';

export const biddingStrategyServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(biddingStrategy).nullable()
}).nullable();

export type BiddingStrategyServiceOperation = z.infer<typeof biddingStrategyServiceOperation>;
