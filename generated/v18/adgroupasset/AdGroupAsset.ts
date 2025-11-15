import { z } from 'zod';

import { adGroupAssetServiceType } from './AdGroupAssetServiceType';
import { adGroupAssetServiceUserStatus } from './AdGroupAssetServiceUserStatus';

export const adGroupAsset = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  assetId: z.number().int().nullable(),
  type: adGroupAssetServiceType,
  userStatus: adGroupAssetServiceUserStatus
}).nullable();

export type AdGroupAsset = z.infer<typeof adGroupAsset>;
