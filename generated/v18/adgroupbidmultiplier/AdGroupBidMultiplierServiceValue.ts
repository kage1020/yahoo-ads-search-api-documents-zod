import { z } from 'zod';

import { adGroupBidMultiplier } from './AdGroupBidMultiplier';
import { error } from '../../common/Error';

export const adGroupBidMultiplierServiceValue = z.object({
  adGroupBidMultiplier: adGroupBidMultiplier,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupBidMultiplierServiceValue = z.infer<typeof adGroupBidMultiplierServiceValue>;
