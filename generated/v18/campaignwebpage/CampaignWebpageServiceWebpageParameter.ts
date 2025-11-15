import { z } from 'zod';

import { campaignWebpageServiceWebpageCondition } from './CampaignWebpageServiceWebpageCondition';

export const campaignWebpageServiceWebpageParameter = z.object({
  conditions: z.array(campaignWebpageServiceWebpageCondition).nullable()
}).nullable();

export type CampaignWebpageServiceWebpageParameter = z.infer<typeof campaignWebpageServiceWebpageParameter>;
