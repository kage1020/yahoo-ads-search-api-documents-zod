import { z } from 'zod';

import { BaseAccount } from './BaseAccount';
import { Error } from './Error';

export const BaseAccountServiceValue = z.object({
  account: BaseAccount,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BaseAccountServiceValue = z.infer<typeof BaseAccountServiceValue>;
