import { z } from 'zod';

import { budgetOrderServiceAccountType } from './BudgetOrderServiceAccountType';
import { budgetOrderServiceLimitChargeType } from './BudgetOrderServiceLimitChargeType';

export const budgetOrder = z.object({
  accountId: z.number().int().nullable(),
  accountType: budgetOrderServiceAccountType,
  amount: z.number().int().nullable(),
  limitChargeType: budgetOrderServiceLimitChargeType
}).nullable();

export type BudgetOrder = z.infer<typeof budgetOrder>;
