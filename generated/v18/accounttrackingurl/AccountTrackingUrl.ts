import { z } from 'zod';

import { accountTrackingUrlServiceUrlApprovalStatus } from './AccountTrackingUrlServiceUrlApprovalStatus';

export const accountTrackingUrl = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReviewUrl: z.string().nullable(),
  inReviewUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  urlApprovalStatus: accountTrackingUrlServiceUrlApprovalStatus
}).nullable();

export type AccountTrackingUrl = z.infer<typeof accountTrackingUrl>;
