import { z } from 'zod';

export const campaignServiceBiddingStrategySource = z.enum(["CAMPAIGN", "UNKNOWN"]).nullable();

export type CampaignServiceBiddingStrategySource = z.infer<typeof campaignServiceBiddingStrategySource>;
