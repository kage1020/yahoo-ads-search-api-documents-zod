import { z } from 'zod';

import { CampaignServiceCustomParameter } from './CampaignServiceCustomParameter';

export const CampaignServiceReviewUrl = z.object({
  parameters: z.array(CampaignServiceCustomParameter).nullable(),
  trackingUrl: z.string().nullable()
}).nullable();

export type CampaignServiceReviewUrl = z.infer<typeof CampaignServiceReviewUrl>;
