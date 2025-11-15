import { z } from 'zod';

import { CampaignWebpageServiceValue } from './CampaignWebpageServiceValue';

export const CampaignWebpageServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignWebpageServiceValue).nullable()
}).nullable();

export type CampaignWebpageServicePage = z.infer<typeof CampaignWebpageServicePage>;
