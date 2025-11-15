import { z } from 'zod';

import { Error } from './Error';
import { CampaignAssetServiceReplaceReturnValue } from './CampaignAssetServiceReplaceReturnValue';

export const CampaignAssetServiceReplaceResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignAssetServiceReplaceReturnValue
}).nullable();

export type CampaignAssetServiceReplaceResponse = z.infer<typeof CampaignAssetServiceReplaceResponse>;
