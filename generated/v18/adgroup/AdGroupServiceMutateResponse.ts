import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupServiceReturnValue } from './AdGroupServiceReturnValue';

export const adGroupServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupServiceReturnValue
}).nullable();

export type AdGroupServiceMutateResponse = z.infer<typeof adGroupServiceMutateResponse>;
