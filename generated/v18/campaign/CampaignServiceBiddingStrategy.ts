import { z } from 'zod';

import { CampaignServiceBiddingScheme } from './CampaignServiceBiddingScheme';
import { CampaignServiceBiddingStrategySource } from './CampaignServiceBiddingStrategySource';

export const CampaignServiceBiddingStrategy = z.object({
  biddingScheme: CampaignServiceBiddingScheme,
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable(),
  biddingStrategySource: CampaignServiceBiddingStrategySource
}).nullable();

export type CampaignServiceBiddingStrategy = z.infer<typeof CampaignServiceBiddingStrategy>;
