import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignWebpageServicePage } from './CampaignWebpageServicePage';

export const campaignWebpageServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignWebpageServicePage
}).nullable();

export type CampaignWebpageServiceGetResponse = z.infer<typeof campaignWebpageServiceGetResponse>;
