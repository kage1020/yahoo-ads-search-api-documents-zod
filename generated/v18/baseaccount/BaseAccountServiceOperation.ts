import { z } from 'zod';

import { account } from './Account';

export const baseAccountServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(account)
}).nullable();

export type BaseAccountServiceOperation = z.infer<typeof baseAccountServiceOperation>;
