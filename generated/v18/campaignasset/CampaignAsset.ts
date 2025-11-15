import { z } from 'zod';

import { CampaignAssetServiceType } from './CampaignAssetServiceType';
import { CampaignAssetServiceUserStatus } from './CampaignAssetServiceUserStatus';

export const CampaignAsset = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  assetId: z.number().int().nullable(),
  type: CampaignAssetServiceType,
  userStatus: CampaignAssetServiceUserStatus
}).nullable();

export type CampaignAsset = z.infer<typeof CampaignAsset>;
