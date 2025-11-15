import { z } from 'zod';

export const biddingStrategyServiceMaximizeClicksBiddingScheme = z.object({
  bidCeiling: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceMaximizeClicksBiddingScheme = z.infer<typeof biddingStrategyServiceMaximizeClicksBiddingScheme>;
