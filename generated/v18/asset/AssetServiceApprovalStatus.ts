import { z } from 'zod';

export const AssetServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type AssetServiceApprovalStatus = z.infer<typeof AssetServiceApprovalStatus>;
