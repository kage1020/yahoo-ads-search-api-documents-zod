import { z } from 'zod';

import { CampaignWebpageServiceWebpage } from './CampaignWebpageServiceWebpage';

export const CampaignWebpage = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignTrackId: z.number().int().nullable(),
  webpage: CampaignWebpageServiceWebpage
}).nullable();

export type CampaignWebpage = z.infer<typeof CampaignWebpage>;
