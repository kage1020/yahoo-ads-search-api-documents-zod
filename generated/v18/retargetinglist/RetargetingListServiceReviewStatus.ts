import { z } from 'zod';

export const retargetingListServiceReviewStatus = z.enum(["APPROVED", "DISAPPROVED", "DISAPPROVED_WITH_REVIEW", "UNKNOWN"]).nullable();

export type RetargetingListServiceReviewStatus = z.infer<typeof retargetingListServiceReviewStatus>;
