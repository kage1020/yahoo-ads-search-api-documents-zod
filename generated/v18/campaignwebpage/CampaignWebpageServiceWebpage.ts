import { z } from 'zod';

import { CampaignWebpageServiceWebpageParameter } from './CampaignWebpageServiceWebpageParameter';

export const CampaignWebpageServiceWebpage = z.object({
  parameter: CampaignWebpageServiceWebpageParameter,
  targetId: z.number().int().nullable(),
  targetTrackId: z.number().int().nullable()
}).nullable();

export type CampaignWebpageServiceWebpage = z.infer<typeof CampaignWebpageServiceWebpage>;
