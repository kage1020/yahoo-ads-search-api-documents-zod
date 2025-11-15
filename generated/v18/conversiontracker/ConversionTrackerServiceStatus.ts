import { z } from 'zod';

export const conversionTrackerServiceStatus = z.enum(["ENABLED", "DISABLED", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceStatus = z.infer<typeof conversionTrackerServiceStatus>;
