import { z } from 'zod';

export const campaignBudget = z.object({
  accountId: z.number().int().nullable(),
  campaignBudgetId: z.number().int().nullable(),
  campaignBudgetName: z.string().nullable(),
  amount: z.number().int().nullable()
}).nullable();

export type CampaignBudget = z.infer<typeof campaignBudget>;
