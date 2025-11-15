import { z } from 'zod';

import { Error } from './Error';
import { AccountManagementServiceReturnValue } from './AccountManagementServiceReturnValue';

export const AccountManagementServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountManagementServiceReturnValue
}).nullable();

export type AccountManagementServiceMutateResponse = z.infer<typeof AccountManagementServiceMutateResponse>;
