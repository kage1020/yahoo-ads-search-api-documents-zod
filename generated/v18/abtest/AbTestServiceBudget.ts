import { z } from 'zod';

export const AbTestServiceBudget = z.object({
  campaignBudgetId: z.number().int().nullable(),
  amount: z.number().int().nullable()
}).nullable();

export type AbTestServiceBudget = z.infer<typeof AbTestServiceBudget>;
