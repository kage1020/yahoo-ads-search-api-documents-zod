import { z } from 'zod';

export const ConversionTrackerServiceAppConversionType = z.enum(["DOWNLOAD", "IN_APP_PURCHASE", "FIRST_OPEN", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAppConversionType = z.infer<typeof ConversionTrackerServiceAppConversionType>;
