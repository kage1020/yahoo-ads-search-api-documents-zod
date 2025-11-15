import { z } from 'zod';

import { ConversionTrackerServiceAppLinkPlatform } from './ConversionTrackerServiceAppLinkPlatform';
import { ConversionTrackerServiceConversionSource } from './ConversionTrackerServiceConversionSource';

export const ConversionTrackerServiceAppLinkConversion = z.object({
  appVendorId: z.string().nullable(),
  appId: z.string().nullable(),
  appLinkPlatform: ConversionTrackerServiceAppLinkPlatform,
  appEventType: z.string().nullable(),
  advancedSnippet: z.string().nullable(),
  source: ConversionTrackerServiceConversionSource
}).nullable();

export type ConversionTrackerServiceAppLinkConversion = z.infer<typeof ConversionTrackerServiceAppLinkConversion>;
