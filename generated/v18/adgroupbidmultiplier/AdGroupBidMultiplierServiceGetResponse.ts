import { z } from 'zod';

import { Error } from './Error';
import { AdGroupBidMultiplierServicePage } from './AdGroupBidMultiplierServicePage';

export const AdGroupBidMultiplierServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupBidMultiplierServicePage
}).nullable();

export type AdGroupBidMultiplierServiceGetResponse = z.infer<typeof AdGroupBidMultiplierServiceGetResponse>;
