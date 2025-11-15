import { z } from 'zod';

import { AdGroupAssetServiceType } from './AdGroupAssetServiceType';
import { AdGroupAssetServiceUserStatus } from './AdGroupAssetServiceUserStatus';

export const AdGroupAssetServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  assetIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(AdGroupAssetServiceType).nullable(),
  userStatuses: z.array(AdGroupAssetServiceUserStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupAssetServiceSelector = z.infer<typeof AdGroupAssetServiceSelector>;
