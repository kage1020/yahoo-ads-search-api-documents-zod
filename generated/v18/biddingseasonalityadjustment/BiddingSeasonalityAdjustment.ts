import { z } from 'zod';

import { biddingSeasonalityAdjustmentServiceDevices } from './BiddingSeasonalityAdjustmentServiceDevices';

export const biddingSeasonalityAdjustment = z.object({
  accountId: z.number().int(),
  biddingSeasonalityAdjustmentName: z.string().nullable(),
  description: z.string().nullable(),
  biddingSeasonalityAdjustmentId: z.number().int().nullable(),
  devices: z.array(biddingSeasonalityAdjustmentServiceDevices).nullable(),
  startDateTime: z.string().nullable(),
  endDateTime: z.string().nullable(),
  conversionRate: z.number().nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type BiddingSeasonalityAdjustment = z.infer<typeof biddingSeasonalityAdjustment>;
