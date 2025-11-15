import { z } from 'zod';

import { ConversionTrackerServiceAppConversionType } from './ConversionTrackerServiceAppConversionType';
import { ConversionTrackerServiceAppPlatform } from './ConversionTrackerServiceAppPlatform';
import { ConversionTrackerServiceAppPostbackUrl } from './ConversionTrackerServiceAppPostbackUrl';
import { ConversionTrackerServiceConversionSource } from './ConversionTrackerServiceConversionSource';

export const ConversionTrackerServiceAppConversion = z.object({
  appConversionType: ConversionTrackerServiceAppConversionType,
  appId: z.string().nullable(),
  appPlatform: ConversionTrackerServiceAppPlatform,
  appPostbackUrl: ConversionTrackerServiceAppPostbackUrl,
  snippetId: z.number().int().nullable(),
  snippetLabel: z.string().nullable(),
  source: ConversionTrackerServiceConversionSource
}).nullable();

export type ConversionTrackerServiceAppConversion = z.infer<typeof ConversionTrackerServiceAppConversion>;
