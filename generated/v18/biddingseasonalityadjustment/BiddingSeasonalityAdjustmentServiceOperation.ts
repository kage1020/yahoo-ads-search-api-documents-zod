import { z } from 'zod';

import { BiddingSeasonalityAdjustment } from './BiddingSeasonalityAdjustment';

export const BiddingSeasonalityAdjustmentServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(BiddingSeasonalityAdjustment).nullable()
}).nullable();

export type BiddingSeasonalityAdjustmentServiceOperation = z.infer<typeof BiddingSeasonalityAdjustmentServiceOperation>;
