import { z } from 'zod';

import { AdGroupAsset } from './AdGroupAsset';
import { AdGroupAssetServiceType } from './AdGroupAssetServiceType';

export const AdGroupAssetServiceList = z.object({
  adGroupAssets: z.array(AdGroupAsset).nullable(),
  adGroupId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  type: AdGroupAssetServiceType
}).nullable();

export type AdGroupAssetServiceList = z.infer<typeof AdGroupAssetServiceList>;
