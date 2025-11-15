import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignBudgetServicePage } from './CampaignBudgetServicePage';

export const campaignBudgetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignBudgetServicePage
}).nullable();

export type CampaignBudgetServiceGetResponse = z.infer<typeof campaignBudgetServiceGetResponse>;
