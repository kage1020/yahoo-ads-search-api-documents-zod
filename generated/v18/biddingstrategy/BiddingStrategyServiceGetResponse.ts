import { z } from 'zod';

import { Error } from './Error';
import { BiddingStrategyServicePage } from './BiddingStrategyServicePage';

export const BiddingStrategyServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BiddingStrategyServicePage
}).nullable();

export type BiddingStrategyServiceGetResponse = z.infer<typeof BiddingStrategyServiceGetResponse>;
