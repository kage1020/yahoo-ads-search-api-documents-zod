import { z } from 'zod';

import { biddingSeasonalityAdjustment } from './BiddingSeasonalityAdjustment';
import { error } from '../../common/Error';

export const biddingSeasonalityAdjustmentServiceValue = z.object({
  biddingSeasonalityAdjustment: biddingSeasonalityAdjustment,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BiddingSeasonalityAdjustmentServiceValue = z.infer<typeof biddingSeasonalityAdjustmentServiceValue>;
