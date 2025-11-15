import { z } from 'zod';

import { conversionTrackerServiceAppLinkPlatform } from './ConversionTrackerServiceAppLinkPlatform';
import { conversionTrackerServiceConversionSource } from './ConversionTrackerServiceConversionSource';

export const conversionTrackerServiceAppLinkConversion = z.object({
  appVendorId: z.string().nullable(),
  appId: z.string().nullable(),
  appLinkPlatform: conversionTrackerServiceAppLinkPlatform,
  appEventType: z.string().nullable(),
  advancedSnippet: z.string().nullable(),
  source: conversionTrackerServiceConversionSource
}).nullable();

export type ConversionTrackerServiceAppLinkConversion = z.infer<typeof conversionTrackerServiceAppLinkConversion>;
