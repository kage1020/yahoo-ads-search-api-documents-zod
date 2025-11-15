import { z } from 'zod';

import { BiddingSeasonalityAdjustmentServiceValue } from './BiddingSeasonalityAdjustmentServiceValue';

export const BiddingSeasonalityAdjustmentServiceReturnValue = z.object({
  values: z.array(BiddingSeasonalityAdjustmentServiceValue).nullable()
}).nullable();

export type BiddingSeasonalityAdjustmentServiceReturnValue = z.infer<typeof BiddingSeasonalityAdjustmentServiceReturnValue>;
