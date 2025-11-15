import { z } from 'zod';

export const BiddingStrategyServiceTargetCpaBiddingScheme = z.object({
  bidCeiling: z.number().int().nullable(),
  bidFloor: z.number().int().nullable(),
  targetCpa: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceTargetCpaBiddingScheme = z.infer<typeof BiddingStrategyServiceTargetCpaBiddingScheme>;
