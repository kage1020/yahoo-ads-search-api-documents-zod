import { z } from 'zod';

import { Error } from './Error';
import { CampaignAssetServicePage } from './CampaignAssetServicePage';

export const CampaignAssetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignAssetServicePage
}).nullable();

export type CampaignAssetServiceGetResponse = z.infer<typeof CampaignAssetServiceGetResponse>;
