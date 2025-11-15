import { z } from 'zod';

export const ConversionTrackerServiceTrackingCodeType = z.enum(["WEBPAGE", "CLICK_TO_CALL", "IMPORT", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceTrackingCodeType = z.infer<typeof ConversionTrackerServiceTrackingCodeType>;
