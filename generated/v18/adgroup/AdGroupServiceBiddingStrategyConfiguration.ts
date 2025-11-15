import { z } from 'zod';

import { adGroupServiceBiddingScheme } from './AdGroupServiceBiddingScheme';

export const adGroupServiceBiddingStrategyConfiguration = z.object({
  biddingScheme: adGroupServiceBiddingScheme,
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable()
}).nullable();

export type AdGroupServiceBiddingStrategyConfiguration = z.infer<typeof adGroupServiceBiddingStrategyConfiguration>;
