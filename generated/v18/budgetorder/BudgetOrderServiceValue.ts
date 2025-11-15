import { z } from 'zod';

import { BudgetOrder } from './BudgetOrder';
import { Error } from './Error';

export const BudgetOrderServiceValue = z.object({
  budgetOrder: BudgetOrder,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BudgetOrderServiceValue = z.infer<typeof BudgetOrderServiceValue>;
