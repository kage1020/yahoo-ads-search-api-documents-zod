import { z } from 'zod';

import { Account } from './Account';

export const BaseAccountServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(Account)
}).nullable();

export type BaseAccountServiceOperation = z.infer<typeof BaseAccountServiceOperation>;
