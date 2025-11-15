import { z } from 'zod';

import { baseAccount } from './BaseAccount';
import { error } from '../../common/Error';

export const baseAccountServiceValue = z.object({
  account: baseAccount,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BaseAccountServiceValue = z.infer<typeof baseAccountServiceValue>;
