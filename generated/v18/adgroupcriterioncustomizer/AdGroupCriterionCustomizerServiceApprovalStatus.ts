import { z } from 'zod';

export const adGroupCriterionCustomizerServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type AdGroupCriterionCustomizerServiceApprovalStatus = z.infer<typeof adGroupCriterionCustomizerServiceApprovalStatus>;
