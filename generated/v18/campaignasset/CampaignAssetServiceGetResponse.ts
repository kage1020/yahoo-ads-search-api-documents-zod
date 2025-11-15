import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignAssetServicePage } from './CampaignAssetServicePage';

export const campaignAssetServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignAssetServicePage
}).nullable();

export type CampaignAssetServiceGetResponse = z.infer<typeof campaignAssetServiceGetResponse>;
