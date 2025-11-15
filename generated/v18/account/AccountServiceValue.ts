import { z } from 'zod';

import { Account } from './Account';
import { Error } from './Error';

export const AccountServiceValue = z.object({
  account: Account,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountServiceValue = z.infer<typeof AccountServiceValue>;
