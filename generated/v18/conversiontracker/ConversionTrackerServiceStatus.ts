import { z } from 'zod';

export const ConversionTrackerServiceStatus = z.enum(["ENABLED", "DISABLED", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceStatus = z.infer<typeof ConversionTrackerServiceStatus>;
