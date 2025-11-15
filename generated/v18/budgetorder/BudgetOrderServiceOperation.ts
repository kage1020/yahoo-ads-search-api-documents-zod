import { z } from 'zod';

import { BudgetOrder } from './BudgetOrder';

export const BudgetOrderServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(BudgetOrder)
}).nullable();

export type BudgetOrderServiceOperation = z.infer<typeof BudgetOrderServiceOperation>;
