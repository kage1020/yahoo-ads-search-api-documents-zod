import { z } from 'zod';

import { campaignWebpageServiceWebpage } from './CampaignWebpageServiceWebpage';

export const campaignWebpage = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignTrackId: z.number().int().nullable(),
  webpage: campaignWebpageServiceWebpage
}).nullable();

export type CampaignWebpage = z.infer<typeof campaignWebpage>;
