import { z } from 'zod';

import { Error } from './Error';
import { BiddingSeasonalityAdjustmentServicePage } from './BiddingSeasonalityAdjustmentServicePage';

export const BiddingSeasonalityAdjustmentServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BiddingSeasonalityAdjustmentServicePage
}).nullable();

export type BiddingSeasonalityAdjustmentServiceGetResponse = z.infer<typeof BiddingSeasonalityAdjustmentServiceGetResponse>;
