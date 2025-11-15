import { z } from 'zod';

import { Error } from './Error';
import { BiddingStrategyServiceReturnValue } from './BiddingStrategyServiceReturnValue';

export const BiddingStrategyServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BiddingStrategyServiceReturnValue
}).nullable();

export type BiddingStrategyServiceMutateResponse = z.infer<typeof BiddingStrategyServiceMutateResponse>;
