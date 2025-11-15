import { z } from 'zod';

import { Error } from './Error';
import { AdGroupWebpageServiceReturnValue } from './AdGroupWebpageServiceReturnValue';

export const AdGroupWebpageServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupWebpageServiceReturnValue
}).nullable();

export type AdGroupWebpageServiceMutateResponse = z.infer<typeof AdGroupWebpageServiceMutateResponse>;
