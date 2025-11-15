import { z } from 'zod';

export const CampaignServiceBiddingStrategyFailedReason = z.enum(["FAILURE", "CONVERSION_TRACKING_NOT_ENABLED", "NOT_ENOUGH_CONVERSIONS", "CANNOT_CREATE_CAMPAIGN_WITH_CONVERSION_OPTIMIZER", "BIDDING_STRATEGY_CANNOT_BE_OVERRIDDEN", "NOT_CPC_CAMPAIGN", "UNKNOWN"]).nullable();

export type CampaignServiceBiddingStrategyFailedReason = z.infer<typeof CampaignServiceBiddingStrategyFailedReason>;
