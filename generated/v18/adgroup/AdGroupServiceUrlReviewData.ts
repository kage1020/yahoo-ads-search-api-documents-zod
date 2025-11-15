import { z } from 'zod';

import { AdGroupServiceReviewUrl } from './AdGroupServiceReviewUrl';
import { AdGroupServiceUrlApprovalStatus } from './AdGroupServiceUrlApprovalStatus';

export const AdGroupServiceUrlReviewData = z.object({
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReviewUrl: AdGroupServiceReviewUrl,
  inReviewUrl: AdGroupServiceReviewUrl,
  urlApprovalStatus: AdGroupServiceUrlApprovalStatus
}).nullable();

export type AdGroupServiceUrlReviewData = z.infer<typeof AdGroupServiceUrlReviewData>;
