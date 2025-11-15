import { z } from 'zod';

export const conversionTrackerServiceAppPlatform = z.enum(["ANDROID_MARKET", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAppPlatform = z.infer<typeof conversionTrackerServiceAppPlatform>;
