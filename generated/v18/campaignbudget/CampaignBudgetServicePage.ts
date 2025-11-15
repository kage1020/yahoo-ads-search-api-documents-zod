import { z } from 'zod';

import { CampaignBudgetServiceValue } from './CampaignBudgetServiceValue';

export const CampaignBudgetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignBudgetServiceValue).nullable()
}).nullable();

export type CampaignBudgetServicePage = z.infer<typeof CampaignBudgetServicePage>;
