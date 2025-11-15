import { z } from 'zod';

export const campaignServiceBudgetAmountRange = z.object({
  min: z.number().int().nullable(),
  max: z.number().int().nullable()
}).nullable();

export type CampaignServiceBudgetAmountRange = z.infer<typeof campaignServiceBudgetAmountRange>;
