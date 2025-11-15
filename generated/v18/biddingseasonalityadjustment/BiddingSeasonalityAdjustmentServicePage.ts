import { z } from 'zod';

import { BiddingSeasonalityAdjustmentServiceValue } from './BiddingSeasonalityAdjustmentServiceValue';

export const BiddingSeasonalityAdjustmentServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(BiddingSeasonalityAdjustmentServiceValue).nullable()
}).nullable();

export type BiddingSeasonalityAdjustmentServicePage = z.infer<typeof BiddingSeasonalityAdjustmentServicePage>;
