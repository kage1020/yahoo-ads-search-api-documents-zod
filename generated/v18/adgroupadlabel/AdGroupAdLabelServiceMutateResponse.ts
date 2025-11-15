import { z } from 'zod';

import { Error } from './Error';
import { AdGroupAdLabelServiceReturnValue } from './AdGroupAdLabelServiceReturnValue';

export const AdGroupAdLabelServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupAdLabelServiceReturnValue
}).nullable();

export type AdGroupAdLabelServiceMutateResponse = z.infer<typeof AdGroupAdLabelServiceMutateResponse>;
