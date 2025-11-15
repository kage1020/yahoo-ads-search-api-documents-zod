import { z } from 'zod';

import { ConversionTrackerServiceAppLinkPlatform } from './ConversionTrackerServiceAppLinkPlatform';

export const ConversionTrackerServiceAppEvent = z.object({
  conversionTrackerTrackId: z.number().int().nullable(),
  appVendorId: z.string().nullable(),
  appId: z.string().nullable(),
  appLinkPlatform: ConversionTrackerServiceAppLinkPlatform,
  appEventType: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceAppEvent = z.infer<typeof ConversionTrackerServiceAppEvent>;
