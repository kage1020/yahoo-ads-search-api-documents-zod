import { z } from 'zod';

export const accountCustomizerServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type AccountCustomizerServiceApprovalStatus = z.infer<typeof accountCustomizerServiceApprovalStatus>;
