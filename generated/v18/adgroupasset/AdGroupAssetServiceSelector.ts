import { z } from 'zod';

import { adGroupAssetServiceType } from './AdGroupAssetServiceType';
import { adGroupAssetServiceUserStatus } from './AdGroupAssetServiceUserStatus';

export const adGroupAssetServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  assetIds: z.array(z.number().int().nullable()).nullable(),
  types: z.array(adGroupAssetServiceType).nullable(),
  userStatuses: z.array(adGroupAssetServiceUserStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupAssetServiceSelector = z.infer<typeof adGroupAssetServiceSelector>;
