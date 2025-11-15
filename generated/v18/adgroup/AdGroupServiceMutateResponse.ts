import { z } from 'zod';

import { Error } from './Error';
import { AdGroupServiceReturnValue } from './AdGroupServiceReturnValue';

export const AdGroupServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupServiceReturnValue
}).nullable();

export type AdGroupServiceMutateResponse = z.infer<typeof AdGroupServiceMutateResponse>;
