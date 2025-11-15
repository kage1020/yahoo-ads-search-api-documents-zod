import { z } from 'zod';

export const conversionTrackerServiceAppConversionType = z.enum(["DOWNLOAD", "IN_APP_PURCHASE", "FIRST_OPEN", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAppConversionType = z.infer<typeof conversionTrackerServiceAppConversionType>;
