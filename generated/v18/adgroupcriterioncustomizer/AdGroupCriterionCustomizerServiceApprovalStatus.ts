import { z } from 'zod';

export const AdGroupCriterionCustomizerServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type AdGroupCriterionCustomizerServiceApprovalStatus = z.infer<typeof AdGroupCriterionCustomizerServiceApprovalStatus>;
