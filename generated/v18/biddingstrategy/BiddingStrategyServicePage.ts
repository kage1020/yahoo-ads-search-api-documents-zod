import { z } from 'zod';

import { biddingStrategyServiceValue } from './BiddingStrategyServiceValue';

export const biddingStrategyServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(biddingStrategyServiceValue).nullable()
}).nullable();

export type BiddingStrategyServicePage = z.infer<typeof biddingStrategyServicePage>;
