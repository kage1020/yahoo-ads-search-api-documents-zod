import { z } from 'zod';

export const adGroupCustomizerServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type AdGroupCustomizerServiceApprovalStatus = z.infer<typeof adGroupCustomizerServiceApprovalStatus>;
