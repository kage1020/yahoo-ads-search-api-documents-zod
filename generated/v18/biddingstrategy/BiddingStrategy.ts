import { z } from 'zod';

import { biddingStrategyServiceBiddingScheme } from './BiddingStrategyServiceBiddingScheme';

export const biddingStrategy = z.object({
  accountId: z.number().int().nullable(),
  biddingScheme: biddingStrategyServiceBiddingScheme,
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable()
}).nullable();

export type BiddingStrategy = z.infer<typeof biddingStrategy>;
