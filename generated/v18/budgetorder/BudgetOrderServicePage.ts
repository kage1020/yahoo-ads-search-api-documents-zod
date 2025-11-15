import { z } from 'zod';

import { BudgetOrderServiceValue } from './BudgetOrderServiceValue';

export const BudgetOrderServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(BudgetOrderServiceValue).nullable()
}).nullable();

export type BudgetOrderServicePage = z.infer<typeof BudgetOrderServicePage>;
