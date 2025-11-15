import { z } from 'zod';

import { error } from '../../common/Error';
import { biddingSeasonalityAdjustmentServiceReturnValue } from './BiddingSeasonalityAdjustmentServiceReturnValue';

export const biddingSeasonalityAdjustmentServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: biddingSeasonalityAdjustmentServiceReturnValue
}).nullable();

export type BiddingSeasonalityAdjustmentServiceMutateResponse = z.infer<typeof biddingSeasonalityAdjustmentServiceMutateResponse>;
