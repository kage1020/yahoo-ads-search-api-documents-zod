import { z } from 'zod';

import { AdGroupBidMultiplier } from './AdGroupBidMultiplier';
import { Error } from './Error';

export const AdGroupBidMultiplierServiceValue = z.object({
  adGroupBidMultiplier: AdGroupBidMultiplier,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupBidMultiplierServiceValue = z.infer<typeof AdGroupBidMultiplierServiceValue>;
