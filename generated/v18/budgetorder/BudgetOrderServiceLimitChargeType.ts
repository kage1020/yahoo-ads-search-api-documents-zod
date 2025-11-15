import { z } from 'zod';

export const BudgetOrderServiceLimitChargeType = z.enum(["SUM", "MONTHLY", "UNKNOWN"]).nullable();

export type BudgetOrderServiceLimitChargeType = z.infer<typeof BudgetOrderServiceLimitChargeType>;
