import { z } from 'zod';

export const budgetOrderServiceSelector = z.object({
  accountIds: z.array(z.number().int()),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type BudgetOrderServiceSelector = z.infer<typeof budgetOrderServiceSelector>;
