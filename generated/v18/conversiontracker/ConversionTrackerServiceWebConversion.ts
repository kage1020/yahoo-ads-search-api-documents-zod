import { z } from 'zod';

import { conversionTrackerServiceMarkupLanguage } from './ConversionTrackerServiceMarkupLanguage';
import { conversionTrackerServiceTrackingCodeType } from './ConversionTrackerServiceTrackingCodeType';
import { conversionTrackerServiceConversionSource } from './ConversionTrackerServiceConversionSource';

export const conversionTrackerServiceWebConversion = z.object({
  markupLanguage: conversionTrackerServiceMarkupLanguage,
  advancedSnippet: z.string().nullable(),
  trackingCodeType: conversionTrackerServiceTrackingCodeType,
  source: conversionTrackerServiceConversionSource
}).nullable();

export type ConversionTrackerServiceWebConversion = z.infer<typeof conversionTrackerServiceWebConversion>;
