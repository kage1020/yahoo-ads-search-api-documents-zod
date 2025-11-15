import { z } from 'zod';

import { Balance } from './Balance';
import { Error } from './Error';

export const BalanceServiceValue = z.object({
  balance: Balance,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BalanceServiceValue = z.infer<typeof BalanceServiceValue>;
