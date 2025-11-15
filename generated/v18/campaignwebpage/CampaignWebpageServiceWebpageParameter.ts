import { z } from 'zod';

import { CampaignWebpageServiceWebpageCondition } from './CampaignWebpageServiceWebpageCondition';

export const CampaignWebpageServiceWebpageParameter = z.object({
  conditions: z.array(CampaignWebpageServiceWebpageCondition).nullable()
}).nullable();

export type CampaignWebpageServiceWebpageParameter = z.infer<typeof CampaignWebpageServiceWebpageParameter>;
