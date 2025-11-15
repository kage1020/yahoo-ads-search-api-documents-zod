import { z } from 'zod';

import { adGroupBidMultiplierServicePlatformType } from './AdGroupBidMultiplierServicePlatformType';

export const adGroupBidMultiplier = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  bidMultiplier: z.number().nullable(),
  campaignId: z.number().int().nullable(),
  platformType: adGroupBidMultiplierServicePlatformType
}).nullable();

export type AdGroupBidMultiplier = z.infer<typeof adGroupBidMultiplier>;
