import { z } from 'zod';

import { AccountShared } from './AccountShared';

export const AccountSharedServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AccountShared).nullable()
}).nullable();

export type AccountSharedServiceOperation = z.infer<typeof AccountSharedServiceOperation>;
