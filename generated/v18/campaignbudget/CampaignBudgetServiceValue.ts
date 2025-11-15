import { z } from 'zod';

import { Error } from './Error';
import { CampaignBudget } from './CampaignBudget';

export const CampaignBudgetServiceValue = z.object({
  errors: z.array(Error).nullable(),
  campaignBudget: CampaignBudget,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignBudgetServiceValue = z.infer<typeof CampaignBudgetServiceValue>;
