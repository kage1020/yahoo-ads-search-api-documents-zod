import { z } from 'zod';

import { balance } from './Balance';
import { error } from '../../common/Error';

export const balanceServiceValue = z.object({
  balance: balance,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BalanceServiceValue = z.infer<typeof balanceServiceValue>;
