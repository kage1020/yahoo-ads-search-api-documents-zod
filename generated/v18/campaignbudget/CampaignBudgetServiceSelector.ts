import { z } from 'zod';

export const CampaignBudgetServiceSelector = z.object({
  accountId: z.number().int(),
  campaignBudgetIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type CampaignBudgetServiceSelector = z.infer<typeof CampaignBudgetServiceSelector>;
