import { z } from 'zod';

import { BudgetOrderServiceValue } from './BudgetOrderServiceValue';

export const BudgetOrderServiceReturnValue = z.object({
  values: z.array(BudgetOrderServiceValue).nullable()
}).nullable();

export type BudgetOrderServiceReturnValue = z.infer<typeof BudgetOrderServiceReturnValue>;
