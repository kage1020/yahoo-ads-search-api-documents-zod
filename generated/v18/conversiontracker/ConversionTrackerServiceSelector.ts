import { z } from 'zod';

import { conversionTrackerServiceCategory } from './ConversionTrackerServiceCategory';
import { conversionTrackerServiceConversionCountingType } from './ConversionTrackerServiceConversionCountingType';
import { conversionTrackerServiceConversionDateRange } from './ConversionTrackerServiceConversionDateRange';
import { conversionTrackerServiceConversionTrackerType } from './ConversionTrackerServiceConversionTrackerType';
import { conversionTrackerServiceExcludeFromBidding } from './ConversionTrackerServiceExcludeFromBidding';
import { conversionTrackerServiceStatus } from './ConversionTrackerServiceStatus';
import { conversionTrackerServiceTrackingCodeType } from './ConversionTrackerServiceTrackingCodeType';

export const conversionTrackerServiceSelector = z.object({
  accountId: z.number().int(),
  appIds: z.array(z.string().nullable()).nullable(),
  categories: z.array(conversionTrackerServiceCategory).nullable(),
  conversionCountingTypes: z.array(conversionTrackerServiceConversionCountingType).nullable(),
  conversionDateRange: conversionTrackerServiceConversionDateRange,
  conversionTrackerIds: z.array(z.number().int().nullable()).nullable(),
  conversionTrackerTypes: z.array(conversionTrackerServiceConversionTrackerType).nullable(),
  excludeFromBiddings: z.array(conversionTrackerServiceExcludeFromBidding).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  statuses: z.array(conversionTrackerServiceStatus).nullable(),
  trackingCodeTypes: z.array(conversionTrackerServiceTrackingCodeType).nullable()
}).nullable();

export type ConversionTrackerServiceSelector = z.infer<typeof conversionTrackerServiceSelector>;
