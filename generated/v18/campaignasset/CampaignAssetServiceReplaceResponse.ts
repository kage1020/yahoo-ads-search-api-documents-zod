import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignAssetServiceReplaceReturnValue } from './CampaignAssetServiceReplaceReturnValue';

export const campaignAssetServiceReplaceResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignAssetServiceReplaceReturnValue
}).nullable();

export type CampaignAssetServiceReplaceResponse = z.infer<typeof campaignAssetServiceReplaceResponse>;
