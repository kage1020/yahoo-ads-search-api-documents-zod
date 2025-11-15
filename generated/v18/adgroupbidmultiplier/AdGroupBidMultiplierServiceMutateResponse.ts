import { z } from 'zod';

import { Error } from './Error';
import { AdGroupBidMultiplierServiceReturnValue } from './AdGroupBidMultiplierServiceReturnValue';

export const AdGroupBidMultiplierServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupBidMultiplierServiceReturnValue
}).nullable();

export type AdGroupBidMultiplierServiceMutateResponse = z.infer<typeof AdGroupBidMultiplierServiceMutateResponse>;
