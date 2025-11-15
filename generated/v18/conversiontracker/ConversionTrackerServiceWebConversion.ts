import { z } from 'zod';

import { ConversionTrackerServiceMarkupLanguage } from './ConversionTrackerServiceMarkupLanguage';
import { ConversionTrackerServiceTrackingCodeType } from './ConversionTrackerServiceTrackingCodeType';
import { ConversionTrackerServiceConversionSource } from './ConversionTrackerServiceConversionSource';

export const ConversionTrackerServiceWebConversion = z.object({
  markupLanguage: ConversionTrackerServiceMarkupLanguage,
  advancedSnippet: z.string().nullable(),
  trackingCodeType: ConversionTrackerServiceTrackingCodeType,
  source: ConversionTrackerServiceConversionSource
}).nullable();

export type ConversionTrackerServiceWebConversion = z.infer<typeof ConversionTrackerServiceWebConversion>;
