import { z } from 'zod';

import { biddingStrategyServiceTargetCpaBiddingScheme } from './BiddingStrategyServiceTargetCpaBiddingScheme';
import { biddingStrategyServiceTargetRoasBiddingScheme } from './BiddingStrategyServiceTargetRoasBiddingScheme';
import { biddingStrategyServiceMaximizeClicksBiddingScheme } from './BiddingStrategyServiceMaximizeClicksBiddingScheme';
import { biddingStrategyServiceTargetImpressionShareScheme } from './BiddingStrategyServiceTargetImpressionShareScheme';
import { biddingStrategyServiceType } from './BiddingStrategyServiceType';

export const biddingStrategyServiceBiddingScheme = z.object({
  targetCpaBiddingScheme: biddingStrategyServiceTargetCpaBiddingScheme,
  targetRoasBiddingScheme: biddingStrategyServiceTargetRoasBiddingScheme,
  maximizeClicksBiddingScheme: biddingStrategyServiceMaximizeClicksBiddingScheme,
  targetImpressionShareScheme: biddingStrategyServiceTargetImpressionShareScheme,
  type: biddingStrategyServiceType
}).nullable();

export type BiddingStrategyServiceBiddingScheme = z.infer<typeof biddingStrategyServiceBiddingScheme>;
