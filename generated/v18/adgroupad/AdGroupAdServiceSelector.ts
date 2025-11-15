import { z } from 'zod';

import { adGroupAdServiceAdType } from './AdGroupAdServiceAdType';
import { adGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';
import { adGroupAdServiceUserStatus } from './AdGroupAdServiceUserStatus';
import { adGroupAdServiceCreatedDateRange } from './AdGroupAdServiceCreatedDateRange';
import { adGroupAdServiceUpdatedDateRange } from './AdGroupAdServiceUpdatedDateRange';

export const adGroupAdServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adIds: z.array(z.number().int().nullable()).nullable(),
  adTypes: z.array(adGroupAdServiceAdType).nullable(),
  approvalStatuses: z.array(adGroupAdServiceApprovalStatus).nullable(),
  userStatuses: z.array(adGroupAdServiceUserStatus).nullable(),
  containsLabel: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  createdDateRange: adGroupAdServiceCreatedDateRange,
  updatedDateRange: adGroupAdServiceUpdatedDateRange,
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AdGroupAdServiceSelector = z.infer<typeof adGroupAdServiceSelector>;
