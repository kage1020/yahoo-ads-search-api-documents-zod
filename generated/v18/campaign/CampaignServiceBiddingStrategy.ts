import { z } from 'zod';

import { campaignServiceBiddingScheme } from './CampaignServiceBiddingScheme';
import { campaignServiceBiddingStrategySource } from './CampaignServiceBiddingStrategySource';

export const campaignServiceBiddingStrategy = z.object({
  biddingScheme: campaignServiceBiddingScheme,
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable(),
  biddingStrategySource: campaignServiceBiddingStrategySource
}).nullable();

export type CampaignServiceBiddingStrategy = z.infer<typeof campaignServiceBiddingStrategy>;
