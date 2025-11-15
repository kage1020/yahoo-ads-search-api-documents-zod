import { z } from 'zod';

export const pageFeedAssetServiceApprovalStatus = z.enum(["APPROVED", "APPROVED_WITH_REVIEW", "REVIEW", "PRE_DISAPPROVED", "POST_DISAPPROVED", "UNKNOWN"]).nullable();

export type PageFeedAssetServiceApprovalStatus = z.infer<typeof pageFeedAssetServiceApprovalStatus>;
