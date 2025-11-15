import { z } from 'zod';

export const conversionTrackerServiceAppLinkPlatform = z.enum(["ANDROID", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAppLinkPlatform = z.infer<typeof conversionTrackerServiceAppLinkPlatform>;
