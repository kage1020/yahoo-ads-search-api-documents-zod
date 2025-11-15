import { z } from 'zod';

import { campaignBudget } from './CampaignBudget';

export const campaignBudgetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaignBudget).nullable()
}).nullable();

export type CampaignBudgetServiceOperation = z.infer<typeof campaignBudgetServiceOperation>;
