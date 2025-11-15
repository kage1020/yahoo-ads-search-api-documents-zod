import { z } from 'zod';

import { adGroupBidMultiplierServicePlatformType } from './AdGroupBidMultiplierServicePlatformType';

export const adGroupBidMultiplierServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  platformTypes: z.array(adGroupBidMultiplierServicePlatformType).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupBidMultiplierServiceSelector = z.infer<typeof adGroupBidMultiplierServiceSelector>;
