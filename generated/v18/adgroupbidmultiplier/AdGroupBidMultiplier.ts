import { z } from 'zod';

import { AdGroupBidMultiplierServicePlatformType } from './AdGroupBidMultiplierServicePlatformType';

export const AdGroupBidMultiplier = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  platformType: AdGroupBidMultiplierServicePlatformType
}).nullable();

export type AdGroupBidMultiplier = z.infer<typeof AdGroupBidMultiplier>;
