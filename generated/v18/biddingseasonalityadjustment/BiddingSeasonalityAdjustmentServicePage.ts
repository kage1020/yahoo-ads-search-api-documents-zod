import { z } from 'zod';

import { biddingSeasonalityAdjustmentServiceValue } from './BiddingSeasonalityAdjustmentServiceValue';

export const biddingSeasonalityAdjustmentServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(biddingSeasonalityAdjustmentServiceValue).nullable()
}).nullable();

export type BiddingSeasonalityAdjustmentServicePage = z.infer<typeof biddingSeasonalityAdjustmentServicePage>;
