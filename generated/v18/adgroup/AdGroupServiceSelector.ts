import { z } from 'zod';

import { adGroupServiceUserStatus } from './AdGroupServiceUserStatus';
import { adGroupServiceCreatedDateRange } from './AdGroupServiceCreatedDateRange';
import { adGroupServiceUpdatedDateRange } from './AdGroupServiceUpdatedDateRange';
import { adGroupServiceBiddingKeywordCpcRange } from './AdGroupServiceBiddingKeywordCpcRange';

export const adGroupServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  portfolioBiddingIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  containsLabel: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(adGroupServiceUserStatus).nullable(),
  createdDateRange: adGroupServiceCreatedDateRange,
  updatedDateRange: adGroupServiceUpdatedDateRange,
  biddingKeywordCpcRange: adGroupServiceBiddingKeywordCpcRange
}).nullable();

export type AdGroupServiceSelector = z.infer<typeof adGroupServiceSelector>;
