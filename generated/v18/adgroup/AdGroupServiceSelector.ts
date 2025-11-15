import { z } from 'zod';

import { AdGroupServiceUserStatus } from './AdGroupServiceUserStatus';
import { AdGroupServiceCreatedDateRange } from './AdGroupServiceCreatedDateRange';
import { AdGroupServiceUpdatedDateRange } from './AdGroupServiceUpdatedDateRange';
import { AdGroupServiceBiddingKeywordCpcRange } from './AdGroupServiceBiddingKeywordCpcRange';

export const AdGroupServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  portfolioBiddingIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  containsLabel: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(AdGroupServiceUserStatus).nullable(),
  createdDateRange: AdGroupServiceCreatedDateRange,
  updatedDateRange: AdGroupServiceUpdatedDateRange,
  biddingKeywordCpcRange: AdGroupServiceBiddingKeywordCpcRange
}).nullable();

export type AdGroupServiceSelector = z.infer<typeof AdGroupServiceSelector>;
