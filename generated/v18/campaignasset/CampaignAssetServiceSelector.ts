import { z } from 'zod';

import { CampaignAssetServiceType } from './CampaignAssetServiceType';
import { CampaignAssetServiceUserStatus } from './CampaignAssetServiceUserStatus';

export const CampaignAssetServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  assetIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(CampaignAssetServiceType).nullable(),
  userStatuses: z.array(CampaignAssetServiceUserStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type CampaignAssetServiceSelector = z.infer<typeof CampaignAssetServiceSelector>;
