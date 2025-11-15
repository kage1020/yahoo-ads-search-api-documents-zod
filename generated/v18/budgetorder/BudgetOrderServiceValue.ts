import { z } from 'zod';

import { budgetOrder } from './BudgetOrder';
import { error } from '../../common/Error';

export const budgetOrderServiceValue = z.object({
  budgetOrder: budgetOrder,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type BudgetOrderServiceValue = z.infer<typeof budgetOrderServiceValue>;
