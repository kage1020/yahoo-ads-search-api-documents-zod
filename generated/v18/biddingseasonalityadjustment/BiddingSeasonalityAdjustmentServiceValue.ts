import { z } from 'zod';

import { BiddingSeasonalityAdjustment } from './BiddingSeasonalityAdjustment';
import { Error } from './Error';

export const BiddingSeasonalityAdjustmentServiceValue = z.object({
  biddingSeasonalityAdjustment: BiddingSeasonalityAdjustment,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BiddingSeasonalityAdjustmentServiceValue = z.infer<typeof BiddingSeasonalityAdjustmentServiceValue>;
