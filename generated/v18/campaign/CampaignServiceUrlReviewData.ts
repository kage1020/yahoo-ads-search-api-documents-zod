import { z } from 'zod';

import { campaignServiceReviewUrl } from './CampaignServiceReviewUrl';
import { campaignServiceUrlApprovalStatus } from './CampaignServiceUrlApprovalStatus';

export const campaignServiceUrlReviewData = z.object({
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReviewUrl: campaignServiceReviewUrl,
  inReviewUrl: campaignServiceReviewUrl,
  urlApprovalStatus: campaignServiceUrlApprovalStatus
}).nullable();

export type CampaignServiceUrlReviewData = z.infer<typeof campaignServiceUrlReviewData>;
