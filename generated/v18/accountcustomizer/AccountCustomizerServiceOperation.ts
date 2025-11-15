import { z } from 'zod';

import { accountCustomizer } from './AccountCustomizer';

export const accountCustomizerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(accountCustomizer).nullable()
}).nullable();

export type AccountCustomizerServiceOperation = z.infer<typeof accountCustomizerServiceOperation>;
