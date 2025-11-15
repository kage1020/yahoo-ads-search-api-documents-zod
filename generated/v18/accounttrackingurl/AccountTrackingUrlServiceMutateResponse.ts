import { z } from 'zod';

import { Error } from './Error';
import { AccountTrackingUrlServiceReturnValue } from './AccountTrackingUrlServiceReturnValue';

export const AccountTrackingUrlServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountTrackingUrlServiceReturnValue
}).nullable();

export type AccountTrackingUrlServiceMutateResponse = z.infer<typeof AccountTrackingUrlServiceMutateResponse>;
