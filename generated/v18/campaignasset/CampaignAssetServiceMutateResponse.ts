import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignAssetServiceReturnValue } from './CampaignAssetServiceReturnValue';

export const campaignAssetServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignAssetServiceReturnValue
}).nullable();

export type CampaignAssetServiceMutateResponse = z.infer<typeof campaignAssetServiceMutateResponse>;
