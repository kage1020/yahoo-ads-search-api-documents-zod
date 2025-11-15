import { z } from 'zod';

import { RetargetingListServiceReviewStatus } from './RetargetingListServiceReviewStatus';

export const RetargetingListServiceRetargetingAccountStatus = z.object({
  agreeDate: z.string().nullable(),
  reviewRequestDate: z.string().nullable(),
  reviewStatus: RetargetingListServiceReviewStatus
}).nullable();

export type RetargetingListServiceRetargetingAccountStatus = z.infer<typeof RetargetingListServiceRetargetingAccountStatus>;
