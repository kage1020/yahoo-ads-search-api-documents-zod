import { z } from 'zod';

import { BiddingSeasonalityAdjustmentServiceDevices } from './BiddingSeasonalityAdjustmentServiceDevices';

export const BiddingSeasonalityAdjustment = z.object({
  accountId: z.number().int(),
  biddingSeasonalityAdjustmentName: z.string().nullable(),
  description: z.string().nullable(),
  biddingSeasonalityAdjustmentId: z.number().int().nullable(),
  devices: z.array(BiddingSeasonalityAdjustmentServiceDevices).nullable(),
  startDateTime: z.string().nullable(),
  endDateTime: z.string().nullable(),
  conversionRate: z.number().nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type BiddingSeasonalityAdjustment = z.infer<typeof BiddingSeasonalityAdjustment>;
