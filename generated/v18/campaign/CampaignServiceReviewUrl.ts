import { z } from 'zod';

import { campaignServiceCustomParameter } from './CampaignServiceCustomParameter';

export const campaignServiceReviewUrl = z.object({
  parameters: z.array(campaignServiceCustomParameter).nullable(),
  trackingUrl: z.string().nullable()
}).nullable();

export type CampaignServiceReviewUrl = z.infer<typeof campaignServiceReviewUrl>;
