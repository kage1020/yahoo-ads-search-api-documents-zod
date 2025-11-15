import { z } from 'zod';

export const biddingStrategyServiceTargetCpaBiddingScheme = z.object({
  bidCeiling: z.number().int().nullable(),
  bidFloor: z.number().int().nullable(),
  targetCpa: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceTargetCpaBiddingScheme = z.infer<typeof biddingStrategyServiceTargetCpaBiddingScheme>;
