import { z } from 'zod';

export const accountTrackingUrlServiceUrlApprovalStatus = z.enum(["NONE", "APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "DISAPPROVED", "UNKNOWN"]).nullable();

export type AccountTrackingUrlServiceUrlApprovalStatus = z.infer<typeof accountTrackingUrlServiceUrlApprovalStatus>;
