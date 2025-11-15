import { z } from 'zod';

import { Error } from './Error';
import { CampaignCriterionServicePage } from './CampaignCriterionServicePage';

export const CampaignCriterionServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignCriterionServicePage
}).nullable();

export type CampaignCriterionServiceGetResponse = z.infer<typeof CampaignCriterionServiceGetResponse>;
