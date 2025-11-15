import { z } from 'zod';

import { ConversionTrackerServiceAppConversion } from './ConversionTrackerServiceAppConversion';
import { ConversionTrackerServiceAppLinkConversion } from './ConversionTrackerServiceAppLinkConversion';
import { ConversionTrackerServiceCategory } from './ConversionTrackerServiceCategory';
import { ConversionTrackerServiceConversionCountingType } from './ConversionTrackerServiceConversionCountingType';
import { ConversionTrackerServiceConversionTrackerType } from './ConversionTrackerServiceConversionTrackerType';
import { ConversionTrackerServiceExcludeFromBidding } from './ConversionTrackerServiceExcludeFromBidding';
import { ConversionTrackerServiceStatus } from './ConversionTrackerServiceStatus';
import { ConversionTrackerServiceWebConversion } from './ConversionTrackerServiceWebConversion';

export const ConversionTracker = z.object({
  accountId: z.number().int().nullable(),
  allConversionValue: z.string().nullable(),
  allConversions: z.number().int().nullable(),
  appConversion: ConversionTrackerServiceAppConversion,
  appLinkConversion: ConversionTrackerServiceAppLinkConversion,
  category: ConversionTrackerServiceCategory,
  conversionCountingType: ConversionTrackerServiceConversionCountingType,
  conversionTrackerId: z.number().int().nullable(),
  conversionTrackerTrackId: z.number().int().nullable(),
  conversionTrackerName: z.string().nullable(),
  conversionTrackerType: ConversionTrackerServiceConversionTrackerType,
  conversionValue: z.string().nullable(),
  conversions: z.number().int().nullable(),
  excludeFromBidding: ConversionTrackerServiceExcludeFromBidding,
  measurementPeriod: z.number().int().nullable(),
  mostRecentConversionDate: z.string().nullable(),
  status: ConversionTrackerServiceStatus,
  userRevenueValue: z.string().nullable(),
  webConversion: ConversionTrackerServiceWebConversion
}).nullable();

export type ConversionTracker = z.infer<typeof ConversionTracker>;
