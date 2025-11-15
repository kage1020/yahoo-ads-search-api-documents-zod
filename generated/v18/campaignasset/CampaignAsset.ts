import { z } from 'zod';

import { campaignAssetServiceType } from './CampaignAssetServiceType';
import { campaignAssetServiceUserStatus } from './CampaignAssetServiceUserStatus';

export const campaignAsset = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  assetId: z.number().int().nullable(),
  type: campaignAssetServiceType,
  userStatus: campaignAssetServiceUserStatus
}).nullable();

export type CampaignAsset = z.infer<typeof campaignAsset>;
