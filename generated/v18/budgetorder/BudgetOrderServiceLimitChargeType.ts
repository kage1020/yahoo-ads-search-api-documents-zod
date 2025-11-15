import { z } from 'zod';

export const budgetOrderServiceLimitChargeType = z.enum(["SUM", "MONTHLY", "UNKNOWN"]).nullable();

export type BudgetOrderServiceLimitChargeType = z.infer<typeof budgetOrderServiceLimitChargeType>;
