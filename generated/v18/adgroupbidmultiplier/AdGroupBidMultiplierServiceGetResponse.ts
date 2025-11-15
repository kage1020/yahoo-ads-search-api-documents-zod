import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupBidMultiplierServicePage } from './AdGroupBidMultiplierServicePage';

export const adGroupBidMultiplierServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupBidMultiplierServicePage
}).nullable();

export type AdGroupBidMultiplierServiceGetResponse = z.infer<typeof adGroupBidMultiplierServiceGetResponse>;
