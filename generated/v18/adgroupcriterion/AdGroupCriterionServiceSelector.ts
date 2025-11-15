import { z } from 'zod';

import { AdGroupCriterionServiceApprovalStatus } from './AdGroupCriterionServiceApprovalStatus';
import { AdGroupCriterionServiceContainsLabelId } from './AdGroupCriterionServiceContainsLabelId';
import { AdGroupCriterionServiceUse } from './AdGroupCriterionServiceUse';
import { AdGroupCriterionServiceUserStatus } from './AdGroupCriterionServiceUserStatus';
import { AdGroupCriterionServiceKeyword } from './AdGroupCriterionServiceKeyword';
import { AdGroupCriterionServiceBiddingKeywordCpcRange } from './AdGroupCriterionServiceBiddingKeywordCpcRange';

export const AdGroupCriterionServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  approvalStatuses: z.array(AdGroupCriterionServiceApprovalStatus).nullable(),
  portfolioBiddingIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  containsLabelId: AdGroupCriterionServiceContainsLabelId,
  criterionIds: z.array(z.number().int().nullable()).nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  use: AdGroupCriterionServiceUse,
  userStatuses: z.array(AdGroupCriterionServiceUserStatus).nullable(),
  keyword: AdGroupCriterionServiceKeyword,
  biddingKeywordCpcRange: AdGroupCriterionServiceBiddingKeywordCpcRange
}).nullable();

export type AdGroupCriterionServiceSelector = z.infer<typeof AdGroupCriterionServiceSelector>;
