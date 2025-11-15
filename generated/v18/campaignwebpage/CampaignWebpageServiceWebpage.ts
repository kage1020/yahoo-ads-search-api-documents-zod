import { z } from 'zod';

import { campaignWebpageServiceWebpageParameter } from './CampaignWebpageServiceWebpageParameter';

export const campaignWebpageServiceWebpage = z.object({
  parameter: campaignWebpageServiceWebpageParameter,
  targetId: z.number().int().nullable(),
  targetTrackId: z.number().int().nullable()
}).nullable();

export type CampaignWebpageServiceWebpage = z.infer<typeof campaignWebpageServiceWebpage>;
