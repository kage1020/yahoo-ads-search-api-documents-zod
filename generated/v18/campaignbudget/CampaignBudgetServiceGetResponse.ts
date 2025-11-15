import { z } from 'zod';

import { Error } from './Error';
import { CampaignBudgetServicePage } from './CampaignBudgetServicePage';

export const CampaignBudgetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignBudgetServicePage
}).nullable();

export type CampaignBudgetServiceGetResponse = z.infer<typeof CampaignBudgetServiceGetResponse>;
