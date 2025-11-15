import { z } from 'zod';

import { budgetOrder } from './BudgetOrder';

export const budgetOrderServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(budgetOrder)
}).nullable();

export type BudgetOrderServiceOperation = z.infer<typeof budgetOrderServiceOperation>;
