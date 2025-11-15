import { z } from 'zod';

import { conversionTrackerServiceAppConversion } from './ConversionTrackerServiceAppConversion';
import { conversionTrackerServiceAppLinkConversion } from './ConversionTrackerServiceAppLinkConversion';
import { conversionTrackerServiceCategory } from './ConversionTrackerServiceCategory';
import { conversionTrackerServiceConversionCountingType } from './ConversionTrackerServiceConversionCountingType';
import { conversionTrackerServiceConversionTrackerType } from './ConversionTrackerServiceConversionTrackerType';
import { conversionTrackerServiceExcludeFromBidding } from './ConversionTrackerServiceExcludeFromBidding';
import { conversionTrackerServiceStatus } from './ConversionTrackerServiceStatus';
import { conversionTrackerServiceWebConversion } from './ConversionTrackerServiceWebConversion';

export const conversionTracker = z.object({
  accountId: z.number().int().nullable(),
  allConversionValue: z.string().nullable(),
  allConversions: z.number().int().nullable(),
  appConversion: conversionTrackerServiceAppConversion,
  appLinkConversion: conversionTrackerServiceAppLinkConversion,
  category: conversionTrackerServiceCategory,
  conversionCountingType: conversionTrackerServiceConversionCountingType,
  conversionTrackerId: z.number().int().nullable(),
  conversionTrackerTrackId: z.number().int().nullable(),
  conversionTrackerName: z.string().nullable(),
  conversionTrackerType: conversionTrackerServiceConversionTrackerType,
  conversionValue: z.string().nullable(),
  conversions: z.number().int().nullable(),
  excludeFromBidding: conversionTrackerServiceExcludeFromBidding,
  measurementPeriod: z.number().int().nullable(),
  mostRecentConversionDate: z.string().nullable(),
  status: conversionTrackerServiceStatus,
  userRevenueValue: z.string().nullable(),
  webConversion: conversionTrackerServiceWebConversion
}).nullable();

export type ConversionTracker = z.infer<typeof conversionTracker>;
