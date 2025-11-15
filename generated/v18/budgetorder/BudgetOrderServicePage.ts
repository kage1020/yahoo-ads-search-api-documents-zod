import { z } from 'zod';

import { budgetOrderServiceValue } from './BudgetOrderServiceValue';

export const budgetOrderServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(budgetOrderServiceValue).nullable()
}).nullable();

export type BudgetOrderServicePage = z.infer<typeof budgetOrderServicePage>;
