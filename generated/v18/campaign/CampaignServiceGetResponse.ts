import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignServicePage } from './CampaignServicePage';

export const campaignServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignServicePage
}).nullable();

export type CampaignServiceGetResponse = z.infer<typeof campaignServiceGetResponse>;
