import { z } from 'zod';

import { BiddingStrategyServiceTargetImpressionShareLocation } from './BiddingStrategyServiceTargetImpressionShareLocation';

export const BiddingStrategyServiceTargetImpressionShareScheme = z.object({
  location: BiddingStrategyServiceTargetImpressionShareLocation,
  bidCeiling: z.number().int().nullable(),
  targetImpressionShare: z.number().int().nullable()
}).nullable();

export type BiddingStrategyServiceTargetImpressionShareScheme = z.infer<typeof BiddingStrategyServiceTargetImpressionShareScheme>;
