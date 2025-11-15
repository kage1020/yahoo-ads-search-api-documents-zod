import { z } from 'zod';

import { AccountTrackingUrlServiceUrlApprovalStatus } from './AccountTrackingUrlServiceUrlApprovalStatus';

export const AccountTrackingUrl = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReviewUrl: z.string().nullable(),
  inReviewUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  urlApprovalStatus: AccountTrackingUrlServiceUrlApprovalStatus
}).nullable();

export type AccountTrackingUrl = z.infer<typeof AccountTrackingUrl>;
