import { z } from 'zod';

export const PageFeedAssetServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceApprovalStatus = z.infer<typeof PageFeedAssetServiceApprovalStatus>;
