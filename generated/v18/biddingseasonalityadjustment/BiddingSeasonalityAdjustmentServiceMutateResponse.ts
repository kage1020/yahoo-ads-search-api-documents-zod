import { z } from 'zod';

import { Error } from './Error';
import { BiddingSeasonalityAdjustmentServiceReturnValue } from './BiddingSeasonalityAdjustmentServiceReturnValue';

export const BiddingSeasonalityAdjustmentServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BiddingSeasonalityAdjustmentServiceReturnValue
}).nullable();

export type BiddingSeasonalityAdjustmentServiceMutateResponse = z.infer<typeof BiddingSeasonalityAdjustmentServiceMutateResponse>;
