import { z } from 'zod';

import { Error } from './Error';
import { AdGroupLabelServiceReturnValue } from './AdGroupLabelServiceReturnValue';

export const AdGroupLabelServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AdGroupLabelServiceReturnValue
}).nullable();

export type AdGroupLabelServiceMutateResponse = z.infer<typeof AdGroupLabelServiceMutateResponse>;
