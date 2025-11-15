import { z } from 'zod';

export const BudgetOrderServiceAccountType = z.enum(["PREPAY", "POSTPAY", "INVOICE", "UNKNOWN"]).nullable();

export type BudgetOrderServiceAccountType = z.infer<typeof BudgetOrderServiceAccountType>;
