import { z } from 'zod';

import { ConversionTrackerServiceCategory } from './ConversionTrackerServiceCategory';
import { ConversionTrackerServiceConversionCountingType } from './ConversionTrackerServiceConversionCountingType';
import { ConversionTrackerServiceConversionDateRange } from './ConversionTrackerServiceConversionDateRange';
import { ConversionTrackerServiceConversionTrackerType } from './ConversionTrackerServiceConversionTrackerType';
import { ConversionTrackerServiceExcludeFromBidding } from './ConversionTrackerServiceExcludeFromBidding';
import { ConversionTrackerServiceStatus } from './ConversionTrackerServiceStatus';
import { ConversionTrackerServiceTrackingCodeType } from './ConversionTrackerServiceTrackingCodeType';

export const ConversionTrackerServiceSelector = z.object({
  accountId: z.number().int(),
  appIds: z.array(z.string().nullable()).nullable(),
  categories: z.array(ConversionTrackerServiceCategory).nullable(),
  conversionCountingTypes: z.array(ConversionTrackerServiceConversionCountingType).nullable(),
  conversionDateRange: ConversionTrackerServiceConversionDateRange,
  conversionTrackerIds: z.array(z.number().int().nullable()).nullable(),
  conversionTrackerTypes: z.array(ConversionTrackerServiceConversionTrackerType).nullable(),
  excludeFromBiddings: z.array(ConversionTrackerServiceExcludeFromBidding).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  statuses: z.array(ConversionTrackerServiceStatus).nullable(),
  trackingCodeTypes: z.array(ConversionTrackerServiceTrackingCodeType).nullable()
}).nullable();

export type ConversionTrackerServiceSelector = z.infer<typeof ConversionTrackerServiceSelector>;
