import { z } from 'zod';

export const RetargetingListServiceReviewStatus = z.enum(["APPROVED", "DISAPPROVED", "DISAPPROVED_WITH_REVIEW", "UNKNOWN"]).nullable();

export type RetargetingListServiceReviewStatus = z.infer<typeof RetargetingListServiceReviewStatus>;
