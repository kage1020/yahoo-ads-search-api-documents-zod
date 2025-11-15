import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupBidMultiplierServiceReturnValue } from './AdGroupBidMultiplierServiceReturnValue';

export const adGroupBidMultiplierServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupBidMultiplierServiceReturnValue
}).nullable();

export type AdGroupBidMultiplierServiceMutateResponse = z.infer<typeof adGroupBidMultiplierServiceMutateResponse>;
