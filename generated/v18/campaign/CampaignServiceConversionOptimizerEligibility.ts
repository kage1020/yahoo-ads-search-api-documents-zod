import { z } from 'zod';

export const CampaignServiceConversionOptimizerEligibility = z.enum(["ENABLE", "DISABLE", "CAMPAIGN_IS_NOT_ACTIVE", "NOT_CPC_CAMPAIGN", "CONVERSION_TRACKING_NOT_ENABLED", "NOT_ENOUGH_CONVERSIONS", "UNKNOWN"]).nullable();

export type CampaignServiceConversionOptimizerEligibility = z.infer<typeof CampaignServiceConversionOptimizerEligibility>;
