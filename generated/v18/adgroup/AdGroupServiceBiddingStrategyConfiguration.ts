import { z } from 'zod';

import { AdGroupServiceBiddingScheme } from './AdGroupServiceBiddingScheme';

export const AdGroupServiceBiddingStrategyConfiguration = z.object({
  biddingScheme: AdGroupServiceBiddingScheme,
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable()
}).nullable();

export type AdGroupServiceBiddingStrategyConfiguration = z.infer<typeof AdGroupServiceBiddingStrategyConfiguration>;
