import { z } from 'zod';

import { biddingSeasonalityAdjustment } from './BiddingSeasonalityAdjustment';

export const biddingSeasonalityAdjustmentServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(biddingSeasonalityAdjustment).nullable()
}).nullable();

export type BiddingSeasonalityAdjustmentServiceOperation = z.infer<typeof biddingSeasonalityAdjustmentServiceOperation>;
