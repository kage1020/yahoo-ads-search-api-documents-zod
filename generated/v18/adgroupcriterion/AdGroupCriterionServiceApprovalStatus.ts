import { z } from 'zod';

export const AdGroupCriterionServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceApprovalStatus = z.infer<typeof AdGroupCriterionServiceApprovalStatus>;
