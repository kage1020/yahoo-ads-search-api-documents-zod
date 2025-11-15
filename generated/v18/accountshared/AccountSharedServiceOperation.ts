import { z } from 'zod';

import { accountShared } from './AccountShared';

export const accountSharedServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(accountShared).nullable()
}).nullable();

export type AccountSharedServiceOperation = z.infer<typeof accountSharedServiceOperation>;
