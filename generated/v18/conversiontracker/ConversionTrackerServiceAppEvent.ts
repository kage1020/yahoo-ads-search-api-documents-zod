import { z } from 'zod';

import { conversionTrackerServiceAppLinkPlatform } from './ConversionTrackerServiceAppLinkPlatform';

export const conversionTrackerServiceAppEvent = z.object({
  conversionTrackerTrackId: z.number().int().nullable(),
  appVendorId: z.string().nullable(),
  appId: z.string().nullable(),
  appLinkPlatform: conversionTrackerServiceAppLinkPlatform,
  appEventType: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceAppEvent = z.infer<typeof conversionTrackerServiceAppEvent>;
