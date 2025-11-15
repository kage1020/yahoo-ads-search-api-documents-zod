import { z } from 'zod';

import { campaignWebpageServiceValue } from './CampaignWebpageServiceValue';

export const campaignWebpageServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignWebpageServiceValue).nullable()
}).nullable();

export type CampaignWebpageServicePage = z.infer<typeof campaignWebpageServicePage>;
