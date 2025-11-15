import { z } from 'zod';

import { BiddingStrategyServiceBiddingScheme } from './BiddingStrategyServiceBiddingScheme';

export const BiddingStrategy = z.object({
  accountId: z.number().int().nullable(),
  biddingScheme: BiddingStrategyServiceBiddingScheme,
  portfolioBiddingId: z.number().int().nullable(),
  portfolioBiddingName: z.string().nullable()
}).nullable();

export type BiddingStrategy = z.infer<typeof BiddingStrategy>;
