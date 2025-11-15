import { z } from 'zod';

import { error } from '../../common/Error';
import { biddingStrategyServiceReturnValue } from './BiddingStrategyServiceReturnValue';

export const biddingStrategyServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: biddingStrategyServiceReturnValue
}).nullable();

export type BiddingStrategyServiceMutateResponse = z.infer<typeof biddingStrategyServiceMutateResponse>;
