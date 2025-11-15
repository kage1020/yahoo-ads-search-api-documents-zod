import { z } from 'zod';

export const ConversionTrackerServiceAppLinkPlatform = z.enum(["ANDROID", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAppLinkPlatform = z.infer<typeof ConversionTrackerServiceAppLinkPlatform>;
