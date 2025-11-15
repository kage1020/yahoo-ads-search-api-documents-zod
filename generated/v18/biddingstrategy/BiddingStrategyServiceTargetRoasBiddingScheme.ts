import { z } from 'zod';

export const biddingStrategyServiceTargetRoasBiddingScheme = z.object({
  bidCeiling: z.number().int().nullable(),
  bidFloor: z.number().int().nullable(),
  targetRoas: z.number().nullable()
}).nullable();

export type BiddingStrategyServiceTargetRoasBiddingScheme = z.infer<typeof biddingStrategyServiceTargetRoasBiddingScheme>;
