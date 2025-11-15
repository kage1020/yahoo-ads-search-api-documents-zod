import { z } from 'zod';

import { Error } from './Error';
import { AccountSharedServiceReturnValue } from './AccountSharedServiceReturnValue';

export const AccountSharedServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountSharedServiceReturnValue
}).nullable();

export type AccountSharedServiceMutateResponse = z.infer<typeof AccountSharedServiceMutateResponse>;
