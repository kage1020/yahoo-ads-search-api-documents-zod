import { z } from 'zod';

import { BiddingStrategyServiceValue } from './BiddingStrategyServiceValue';

export const BiddingStrategyServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(BiddingStrategyServiceValue).nullable()
}).nullable();

export type BiddingStrategyServicePage = z.infer<typeof BiddingStrategyServicePage>;
