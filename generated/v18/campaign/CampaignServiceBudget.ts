import { z } from 'zod';

export const campaignServiceBudget = z.object({
  amount: z.number().int().nullable(),
  campaignBudgetId: z.number().int().nullable(),
  campaignBudgetName: z.string().nullable()
}).nullable();

export type CampaignServiceBudget = z.infer<typeof campaignServiceBudget>;
