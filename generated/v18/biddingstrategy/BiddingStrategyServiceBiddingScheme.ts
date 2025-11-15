import { z } from 'zod';

import { BiddingStrategyServiceTargetCpaBiddingScheme } from './BiddingStrategyServiceTargetCpaBiddingScheme';
import { BiddingStrategyServiceTargetRoasBiddingScheme } from './BiddingStrategyServiceTargetRoasBiddingScheme';
import { BiddingStrategyServiceMaximizeClicksBiddingScheme } from './BiddingStrategyServiceMaximizeClicksBiddingScheme';
import { BiddingStrategyServiceTargetImpressionShareScheme } from './BiddingStrategyServiceTargetImpressionShareScheme';
import { BiddingStrategyServiceType } from './BiddingStrategyServiceType';

export const BiddingStrategyServiceBiddingScheme = z.object({
  targetCpaBiddingScheme: BiddingStrategyServiceTargetCpaBiddingScheme,
  targetRoasBiddingScheme: BiddingStrategyServiceTargetRoasBiddingScheme,
  maximizeClicksBiddingScheme: BiddingStrategyServiceMaximizeClicksBiddingScheme,
  targetImpressionShareScheme: BiddingStrategyServiceTargetImpressionShareScheme,
  type: BiddingStrategyServiceType
}).nullable();

export type BiddingStrategyServiceBiddingScheme = z.infer<typeof BiddingStrategyServiceBiddingScheme>;
