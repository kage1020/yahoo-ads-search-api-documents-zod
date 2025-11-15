import { z } from 'zod';

export const AdGroupAdServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "APPROVED_WITH_PRE_DISAPPROVED", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "POST_DISAPPROVED_WITH_REVIEW", "UNKNOWN"]).nullable();

export type AdGroupAdServiceApprovalStatus = z.infer<typeof AdGroupAdServiceApprovalStatus>;
