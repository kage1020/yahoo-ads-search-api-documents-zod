import { z } from 'zod';

export const biddingSeasonalityAdjustmentServiceDevices = z.enum(["MOBILE", "TABLET", "DESKTOP", "UNKNOWN"]).nullable();

export type BiddingSeasonalityAdjustmentServiceDevices = z.infer<typeof biddingSeasonalityAdjustmentServiceDevices>;
