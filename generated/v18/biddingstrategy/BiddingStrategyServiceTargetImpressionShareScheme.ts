import { z } from 'zod';

import { biddingStrategyServiceTargetImpressionShareLocation } from './BiddingStrategyServiceTargetImpressionShareLocation';

export const biddingStrategyServiceTargetImpressionShareScheme = z.object({
  location: biddingStrategyServiceTargetImpressionShareLocation,
  bidCeiling: z.number().int().nullable(),
  targetImpressionShare: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceTargetImpressionShareScheme = z.infer<typeof biddingStrategyServiceTargetImpressionShareScheme>;
