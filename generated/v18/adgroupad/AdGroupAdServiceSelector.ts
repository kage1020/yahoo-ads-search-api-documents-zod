import { z } from 'zod';

import { AdGroupAdServiceAdType } from './AdGroupAdServiceAdType';
import { AdGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';
import { AdGroupAdServiceUserStatus } from './AdGroupAdServiceUserStatus';
import { AdGroupAdServiceCreatedDateRange } from './AdGroupAdServiceCreatedDateRange';
import { AdGroupAdServiceUpdatedDateRange } from './AdGroupAdServiceUpdatedDateRange';

export const AdGroupAdServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adIds: z.array(z.number().int().nullable()).nullable(),
  adTypes: z.array(AdGroupAdServiceAdType).nullable(),
  approvalStatuses: z.array(AdGroupAdServiceApprovalStatus).nullable(),
  userStatuses: z.array(AdGroupAdServiceUserStatus).nullable(),
  containsLabel: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  createdDateRange: AdGroupAdServiceCreatedDateRange,
  updatedDateRange: AdGroupAdServiceUpdatedDateRange,
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupAdServiceSelector = z.infer<typeof AdGroupAdServiceSelector>;
