import { z } from 'zod';

import { CampaignAsset } from './CampaignAsset';
import { CampaignAssetServiceType } from './CampaignAssetServiceType';

export const CampaignAssetServiceList = z.object({
  campaignAssets: z.array(CampaignAsset).nullable(),
  campaignId: z.number().int().nullable(),
  type: CampaignAssetServiceType
}).nullable();

export type CampaignAssetServiceList = z.infer<typeof CampaignAssetServiceList>;
