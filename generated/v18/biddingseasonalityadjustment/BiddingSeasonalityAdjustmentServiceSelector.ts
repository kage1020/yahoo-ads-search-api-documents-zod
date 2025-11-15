import { z } from 'zod';

export const BiddingSeasonalityAdjustmentServiceSelector = z.object({
  accountId: z.number().int(),
  biddingSeasonalityAdjustmentIds: z.array(z.number().int().nullable()).nullable(),
  campaignId: z.number().int().nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type BiddingSeasonalityAdjustmentServiceSelector = z.infer<typeof BiddingSeasonalityAdjustmentServiceSelector>;
