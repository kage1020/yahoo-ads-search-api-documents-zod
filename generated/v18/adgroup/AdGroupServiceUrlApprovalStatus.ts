import { z } from 'zod';

export const AdGroupServiceUrlApprovalStatus = z.enum(["NONE", "APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "DISAPPROVED", "UNKNOWN"]).nullable();

export type AdGroupServiceUrlApprovalStatus = z.infer<typeof AdGroupServiceUrlApprovalStatus>;
