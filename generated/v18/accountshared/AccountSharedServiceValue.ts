import { z } from 'zod';

import { accountShared } from './AccountShared';
import { error } from '../../common/Error';

export const accountSharedServiceValue = z.object({
  accountShared: accountShared,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountSharedServiceValue = z.infer<typeof accountSharedServiceValue>;
