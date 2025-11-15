import { z } from 'zod';

import { Account } from './Account';

export const AccountServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(Account)
}).nullable();

export type AccountServiceOperation = z.infer<typeof AccountServiceOperation>;
