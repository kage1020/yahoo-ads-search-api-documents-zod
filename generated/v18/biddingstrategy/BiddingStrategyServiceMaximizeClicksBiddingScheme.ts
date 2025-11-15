import { z } from 'zod';

export const BiddingStrategyServiceMaximizeClicksBiddingScheme = z.object({
  bidCeiling: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceMaximizeClicksBiddingScheme = z.infer<typeof BiddingStrategyServiceMaximizeClicksBiddingScheme>;
