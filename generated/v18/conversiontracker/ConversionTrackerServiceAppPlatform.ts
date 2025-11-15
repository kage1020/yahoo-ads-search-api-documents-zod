import { z } from 'zod';

export const ConversionTrackerServiceAppPlatform = z.enum(["ANDROID_MARKET", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAppPlatform = z.infer<typeof ConversionTrackerServiceAppPlatform>;
