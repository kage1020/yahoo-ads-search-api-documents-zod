import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignCustomizerServicePage } from './CampaignCustomizerServicePage';

export const campaignCustomizerServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignCustomizerServicePage
}).nullable();

export type CampaignCustomizerServiceGetResponse = z.infer<typeof campaignCustomizerServiceGetResponse>;
