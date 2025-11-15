import { z } from 'zod';

import { BiddingStrategyServiceType } from './BiddingStrategyServiceType';

export const BiddingStrategyServiceSelector = z.object({
  accountId: z.number().int(),
  portfolioBiddingIds: z.array(z.number().int().nullable()).nullable(),
  biddingStrategyTypes: z.array(BiddingStrategyServiceType).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type BiddingStrategyServiceSelector = z.infer<typeof BiddingStrategyServiceSelector>;
