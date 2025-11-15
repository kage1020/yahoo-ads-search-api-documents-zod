import { z } from 'zod';

export const CampaignServiceBiddingStrategySource = z.enum(["CAMPAIGN", "UNKNOWN"]).nullable();

export type CampaignServiceBiddingStrategySource = z.infer<typeof CampaignServiceBiddingStrategySource>;
