import { z } from 'zod';

import { campaignBudgetServiceValue } from './CampaignBudgetServiceValue';

export const campaignBudgetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignBudgetServiceValue).nullable()
}).nullable();

export type CampaignBudgetServicePage = z.infer<typeof campaignBudgetServicePage>;
