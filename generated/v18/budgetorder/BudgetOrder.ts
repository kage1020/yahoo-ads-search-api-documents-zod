import { z } from 'zod';

import { BudgetOrderServiceAccountType } from './BudgetOrderServiceAccountType';
import { BudgetOrderServiceLimitChargeType } from './BudgetOrderServiceLimitChargeType';

export const BudgetOrder = z.object({
  accountId: z.number().int().nullable(),
  accountType: BudgetOrderServiceAccountType,
  amount: z.number().int().nullable(),
  limitChargeType: BudgetOrderServiceLimitChargeType
}).nullable();

export type BudgetOrder = z.infer<typeof BudgetOrder>;
