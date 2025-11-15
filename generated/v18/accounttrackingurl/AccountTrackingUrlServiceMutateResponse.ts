import { z } from 'zod';

import { error } from '../../common/Error';
import { accountTrackingUrlServiceReturnValue } from './AccountTrackingUrlServiceReturnValue';

export const accountTrackingUrlServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountTrackingUrlServiceReturnValue
}).nullable();

export type AccountTrackingUrlServiceMutateResponse = z.infer<typeof accountTrackingUrlServiceMutateResponse>;
