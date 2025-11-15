import { z } from 'zod';

export const conversionTrackerServiceConversionTrackerType = z.enum(["WEB_CONVERSION", "APP_CONVERSION", "APP_LINK_CONVERSION", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceConversionTrackerType = z.infer<typeof conversionTrackerServiceConversionTrackerType>;
