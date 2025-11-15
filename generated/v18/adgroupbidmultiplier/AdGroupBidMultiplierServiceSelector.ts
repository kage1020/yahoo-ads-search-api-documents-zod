import { z } from 'zod';

import { AdGroupBidMultiplierServicePlatformType } from './AdGroupBidMultiplierServicePlatformType';

export const AdGroupBidMultiplierServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  platformTypes: z.array(AdGroupBidMultiplierServicePlatformType).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupBidMultiplierServiceSelector = z.infer<typeof AdGroupBidMultiplierServiceSelector>;
