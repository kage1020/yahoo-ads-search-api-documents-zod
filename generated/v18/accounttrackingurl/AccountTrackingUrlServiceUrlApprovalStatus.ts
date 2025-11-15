import { z } from 'zod';

export const AccountTrackingUrlServiceUrlApprovalStatus = z.enum(["NONE", "APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "DISAPPROVED", "UNKNOWN"]).nullable();

export type AccountTrackingUrlServiceUrlApprovalStatus = z.infer<typeof AccountTrackingUrlServiceUrlApprovalStatus>;
