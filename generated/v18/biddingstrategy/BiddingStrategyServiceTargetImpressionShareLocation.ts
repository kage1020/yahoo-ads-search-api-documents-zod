import { z } from 'zod';

export const BiddingStrategyServiceTargetImpressionShareLocation = z.enum(["ANYWHERE_ON_PAGE", "TOP_OF_PAGE", "ABSOLUTE_TOP_OF_PAGE", "UNKNOWN"]).nullable();

export type BiddingStrategyServiceTargetImpressionShareLocation = z.infer<typeof BiddingStrategyServiceTargetImpressionShareLocation>;
