import { z } from 'zod';

import { campaignAssetServiceType } from './CampaignAssetServiceType';
import { campaignAssetServiceUserStatus } from './CampaignAssetServiceUserStatus';

export const campaignAssetServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  assetIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(campaignAssetServiceType).nullable(),
  userStatuses: z.array(campaignAssetServiceUserStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type CampaignAssetServiceSelector = z.infer<typeof campaignAssetServiceSelector>;
