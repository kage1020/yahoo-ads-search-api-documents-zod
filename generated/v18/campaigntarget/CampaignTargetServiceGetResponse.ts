import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignTargetServicePage } from './CampaignTargetServicePage';

export const campaignTargetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignTargetServicePage
}).nullable();

export type CampaignTargetServiceGetResponse = z.infer<typeof campaignTargetServiceGetResponse>;
