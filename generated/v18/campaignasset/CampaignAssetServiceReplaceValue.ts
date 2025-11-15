import { z } from 'zod';

import { CampaignAsset } from './CampaignAsset';
import { Error } from './Error';

export const CampaignAssetServiceReplaceValue = z.object({
  campaignAssets: z.array(CampaignAsset).nullable(),
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignAssetServiceReplaceValue = z.infer<typeof CampaignAssetServiceReplaceValue>;
