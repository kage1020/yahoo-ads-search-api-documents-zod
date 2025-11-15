import { z } from 'zod';

import { conversionTrackerServiceAppConversionType } from './ConversionTrackerServiceAppConversionType';
import { conversionTrackerServiceAppPlatform } from './ConversionTrackerServiceAppPlatform';
import { conversionTrackerServiceAppPostbackUrl } from './ConversionTrackerServiceAppPostbackUrl';
import { conversionTrackerServiceConversionSource } from './ConversionTrackerServiceConversionSource';

export const conversionTrackerServiceAppConversion = z.object({
  appConversionType: conversionTrackerServiceAppConversionType,
  appId: z.string().nullable(),
  appPlatform: conversionTrackerServiceAppPlatform,
  appPostbackUrl: conversionTrackerServiceAppPostbackUrl,
  snippetId: z.number().int().nullable(),
  snippetLabel: z.string().nullable(),
  source: conversionTrackerServiceConversionSource
}).nullable();

export type ConversionTrackerServiceAppConversion = z.infer<typeof conversionTrackerServiceAppConversion>;
