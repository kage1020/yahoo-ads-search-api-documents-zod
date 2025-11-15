import { z } from 'zod';

import { adGroupCriterionServiceApprovalStatus } from './AdGroupCriterionServiceApprovalStatus';
import { adGroupCriterionServiceContainsLabelId } from './AdGroupCriterionServiceContainsLabelId';
import { adGroupCriterionServiceUse } from './AdGroupCriterionServiceUse';
import { adGroupCriterionServiceUserStatus } from './AdGroupCriterionServiceUserStatus';
import { adGroupCriterionServiceKeyword } from './AdGroupCriterionServiceKeyword';
import { adGroupCriterionServiceBiddingKeywordCpcRange } from './AdGroupCriterionServiceBiddingKeywordCpcRange';

export const adGroupCriterionServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  approvalStatuses: z.array(adGroupCriterionServiceApprovalStatus).nullable(),
  portfolioBiddingIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  containsLabelId: adGroupCriterionServiceContainsLabelId,
  criterionIds: z.array(z.number().int().nullable()).nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  use: adGroupCriterionServiceUse,
  userStatuses: z.array(adGroupCriterionServiceUserStatus).nullable(),
  keyword: adGroupCriterionServiceKeyword,
  biddingKeywordCpcRange: adGroupCriterionServiceBiddingKeywordCpcRange
}).nullable();

export type AdGroupCriterionServiceSelector = z.infer<typeof adGroupCriterionServiceSelector>;
