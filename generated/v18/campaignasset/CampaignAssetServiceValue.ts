import { z } from 'zod';

import { CampaignAsset } from './CampaignAsset';
import { Error } from './Error';

export const CampaignAssetServiceValue = z.object({
  campaignAsset: CampaignAsset,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignAssetServiceValue = z.infer<typeof CampaignAssetServiceValue>;
