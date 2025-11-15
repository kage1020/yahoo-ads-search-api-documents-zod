import { z } from 'zod';

import { Error } from './Error';
import { AdGroupAdServiceReturnValue } from './AdGroupAdServiceReturnValue';

export const AdGroupAdServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupAdServiceReturnValue
}).nullable();

export type AdGroupAdServiceMutateResponse = z.infer<typeof AdGroupAdServiceMutateResponse>;
