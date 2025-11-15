import { z } from 'zod';

export const adGroupServiceCampaignBiddingStrategyType = z.enum(["CPC", "TARGET_ROAS", "MAXIMIZE_CLICKS", "TARGET_CPA", "MAXIMIZE_CONVERSIONS", "MAXIMIZE_CONVERSION_VALUE", "TARGET_IMPRESSION_SHARE", "UNKNOWN"]).nullable();

export type AdGroupServiceCampaignBiddingStrategyType = z.infer<typeof adGroupServiceCampaignBiddingStrategyType>;
