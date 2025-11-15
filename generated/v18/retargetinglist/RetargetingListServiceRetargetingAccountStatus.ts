import { z } from 'zod';

import { retargetingListServiceReviewStatus } from './RetargetingListServiceReviewStatus';

export const retargetingListServiceRetargetingAccountStatus = z.object({
  agreeDate: z.string().nullable(),
  reviewRequestDate: z.string().nullable(),
  reviewStatus: retargetingListServiceReviewStatus
}).nullable();

export type RetargetingListServiceRetargetingAccountStatus = z.infer<typeof retargetingListServiceRetargetingAccountStatus>;
