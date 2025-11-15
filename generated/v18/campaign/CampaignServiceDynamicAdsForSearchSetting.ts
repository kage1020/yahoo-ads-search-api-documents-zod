import { z } from 'zod';

import { CampaignServiceDasUseUrlsType } from './CampaignServiceDasUseUrlsType';

export const CampaignServiceDynamicAdsForSearchSetting = z.object({
  feedIds: z.array(z.number().int().nullable()).nullable(),
  pageFeedAssetSetIds: z.array(z.number().int().nullable()).nullable(),
  domain: z.string().nullable(),
  dasUseUrlsType: CampaignServiceDasUseUrlsType
}).nullable();

export type CampaignServiceDynamicAdsForSearchSetting = z.infer<typeof CampaignServiceDynamicAdsForSearchSetting>;
