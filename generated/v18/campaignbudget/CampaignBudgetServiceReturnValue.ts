import { z } from 'zod';

import { campaignBudgetServiceValue } from './CampaignBudgetServiceValue';

export const campaignBudgetServiceReturnValue = z.object({
  values: z.array(campaignBudgetServiceValue).nullable()
}).nullable();

export type CampaignBudgetServiceReturnValue = z.infer<typeof campaignBudgetServiceReturnValue>;
