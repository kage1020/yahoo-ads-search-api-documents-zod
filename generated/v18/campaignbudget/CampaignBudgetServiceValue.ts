import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignBudget } from './CampaignBudget';

export const campaignBudgetServiceValue = z.object({
  errors: z.array(error).nullable(),
  campaignBudget: campaignBudget,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignBudgetServiceValue = z.infer<typeof campaignBudgetServiceValue>;
