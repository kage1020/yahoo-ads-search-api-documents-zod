import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignCriterionServicePage } from './CampaignCriterionServicePage';

export const campaignCriterionServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignCriterionServicePage
}).nullable();

export type CampaignCriterionServiceGetResponse = z.infer<typeof campaignCriterionServiceGetResponse>;
