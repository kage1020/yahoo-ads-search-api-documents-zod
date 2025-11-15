import { z } from 'zod';

import { CampaignServiceReviewUrl } from './CampaignServiceReviewUrl';
import { CampaignServiceUrlApprovalStatus } from './CampaignServiceUrlApprovalStatus';

export const CampaignServiceUrlReviewData = z.object({
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReviewUrl: CampaignServiceReviewUrl,
  inReviewUrl: CampaignServiceReviewUrl,
  urlApprovalStatus: CampaignServiceUrlApprovalStatus
}).nullable();

export type CampaignServiceUrlReviewData = z.infer<typeof CampaignServiceUrlReviewData>;
