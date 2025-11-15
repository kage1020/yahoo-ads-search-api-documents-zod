import { z } from 'zod';

import { budgetOrderServiceValue } from './BudgetOrderServiceValue';

export const budgetOrderServiceReturnValue = z.object({
  values: z.array(budgetOrderServiceValue).nullable()
}).nullable();

export type BudgetOrderServiceReturnValue = z.infer<typeof budgetOrderServiceReturnValue>;
