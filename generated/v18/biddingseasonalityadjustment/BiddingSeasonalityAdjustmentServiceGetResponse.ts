import { z } from 'zod';

import { error } from '../../common/Error';
import { biddingSeasonalityAdjustmentServicePage } from './BiddingSeasonalityAdjustmentServicePage';

export const biddingSeasonalityAdjustmentServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: biddingSeasonalityAdjustmentServicePage
}).nullable();

export type BiddingSeasonalityAdjustmentServiceGetResponse = z.infer<typeof biddingSeasonalityAdjustmentServiceGetResponse>;
