import { z } from 'zod';

import { error } from '../../common/Error';
import { biddingStrategyServicePage } from './BiddingStrategyServicePage';

export const biddingStrategyServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: biddingStrategyServicePage
}).nullable();

export type BiddingStrategyServiceGetResponse = z.infer<typeof biddingStrategyServiceGetResponse>;
