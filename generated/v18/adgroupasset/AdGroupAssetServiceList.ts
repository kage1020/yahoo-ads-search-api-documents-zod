import { z } from 'zod';

import { adGroupAsset } from './AdGroupAsset';
import { adGroupAssetServiceType } from './AdGroupAssetServiceType';

export const adGroupAssetServiceList = z.object({
  adGroupAssets: z.array(adGroupAsset).nullable(),
  adGroupId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  type: adGroupAssetServiceType
}).nullable();

export type AdGroupAssetServiceList = z.infer<typeof adGroupAssetServiceList>;
