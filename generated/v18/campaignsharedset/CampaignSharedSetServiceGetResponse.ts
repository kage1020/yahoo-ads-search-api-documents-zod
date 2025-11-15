import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignSharedSetServicePage } from './CampaignSharedSetServicePage';

export const campaignSharedSetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignSharedSetServicePage
}).nullable();

export type CampaignSharedSetServiceGetResponse = z.infer<typeof campaignSharedSetServiceGetResponse>;
