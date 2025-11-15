import { z } from 'zod';

import { campaignAsset } from './CampaignAsset';
import { campaignAssetServiceType } from './CampaignAssetServiceType';

export const campaignAssetServiceList = z.object({
  campaignAssets: z.array(campaignAsset).nullable(),
  campaignId: z.number().int().nullable(),
  type: campaignAssetServiceType
}).nullable();

export type CampaignAssetServiceList = z.infer<typeof campaignAssetServiceList>;
