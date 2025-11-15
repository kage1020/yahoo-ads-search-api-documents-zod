import { z } from 'zod';

import { campaignServiceDasUseUrlsType } from './CampaignServiceDasUseUrlsType';

export const campaignServiceDynamicAdsForSearchSetting = z.object({
  feedIds: z.array(z.number().int().nullable()).nullable(),
  pageFeedAssetSetIds: z.array(z.number().int().nullable()).nullable(),
  domain: z.string().nullable(),
  dasUseUrlsType: campaignServiceDasUseUrlsType
}).nullable();

export type CampaignServiceDynamicAdsForSearchSetting = z.infer<typeof campaignServiceDynamicAdsForSearchSetting>;
