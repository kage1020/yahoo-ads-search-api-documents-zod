import { z } from 'zod';

import { Error } from './Error';
import { AccountServiceReturnValue } from './AccountServiceReturnValue';

export const AccountServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountServiceReturnValue
}).nullable();

export type AccountServiceMutateResponse = z.infer<typeof AccountServiceMutateResponse>;
