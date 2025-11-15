import { z } from 'zod';

import { biddingSeasonalityAdjustmentServiceValue } from './BiddingSeasonalityAdjustmentServiceValue';

export const biddingSeasonalityAdjustmentServiceReturnValue = z.object({
  values: z.array(biddingSeasonalityAdjustmentServiceValue).nullable()
}).nullable();

export type BiddingSeasonalityAdjustmentServiceReturnValue = z.infer<typeof biddingSeasonalityAdjustmentServiceReturnValue>;
