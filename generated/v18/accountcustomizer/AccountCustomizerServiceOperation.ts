import { z } from 'zod';

import { AccountCustomizer } from './AccountCustomizer';

export const AccountCustomizerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AccountCustomizer).nullable()
}).nullable();

export type AccountCustomizerServiceOperation = z.infer<typeof AccountCustomizerServiceOperation>;
