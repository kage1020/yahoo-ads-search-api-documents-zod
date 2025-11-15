import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupAdServiceReturnValue } from './AdGroupAdServiceReturnValue';

export const adGroupAdServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: adGroupAdServiceReturnValue
}).nullable();

export type AdGroupAdServiceMutateResponse = z.infer<typeof adGroupAdServiceMutateResponse>;
