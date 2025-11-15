import { z } from 'zod';

export const conversionTrackerServiceConversionSource = z.enum(["WEBSITE", "APP", "CALL_FROM_ADS", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceConversionSource = z.infer<typeof conversionTrackerServiceConversionSource>;
