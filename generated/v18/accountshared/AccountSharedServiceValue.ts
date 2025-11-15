import { z } from 'zod';

import { AccountShared } from './AccountShared';
import { Error } from './Error';

export const AccountSharedServiceValue = z.object({
  accountShared: AccountShared,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountSharedServiceValue = z.infer<typeof AccountSharedServiceValue>;
