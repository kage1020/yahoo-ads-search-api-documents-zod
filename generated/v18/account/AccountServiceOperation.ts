import { z } from 'zod';

import { account } from './Account';

export const accountServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(account)
}).nullable();

export type AccountServiceOperation = z.infer<typeof accountServiceOperation>;
