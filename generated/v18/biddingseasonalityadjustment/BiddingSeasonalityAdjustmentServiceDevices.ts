import { z } from 'zod';

export const BiddingSeasonalityAdjustmentServiceDevices = z.enum(["MOBILE", "TABLET", "DESKTOP", "UNKNOWN"]).nullable();

export type BiddingSeasonalityAdjustmentServiceDevices = z.infer<typeof BiddingSeasonalityAdjustmentServiceDevices>;
