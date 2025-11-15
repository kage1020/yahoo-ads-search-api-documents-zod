import { z } from 'zod';

import { AdGroupAssetServiceType } from './AdGroupAssetServiceType';
import { AdGroupAssetServiceUserStatus } from './AdGroupAssetServiceUserStatus';

export const AdGroupAsset = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  assetId: z.number().int().nullable(),
  type: AdGroupAssetServiceType,
  userStatus: AdGroupAssetServiceUserStatus
}).nullable();

export type AdGroupAsset = z.infer<typeof AdGroupAsset>;
