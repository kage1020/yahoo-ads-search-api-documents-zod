import { z } from 'zod';

import { adGroupServiceReviewUrl } from './AdGroupServiceReviewUrl';
import { adGroupServiceUrlApprovalStatus } from './AdGroupServiceUrlApprovalStatus';

export const adGroupServiceUrlReviewData = z.object({
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReviewUrl: adGroupServiceReviewUrl,
  inReviewUrl: adGroupServiceReviewUrl,
  urlApprovalStatus: adGroupServiceUrlApprovalStatus
}).nullable();

export type AdGroupServiceUrlReviewData = z.infer<typeof adGroupServiceUrlReviewData>;
