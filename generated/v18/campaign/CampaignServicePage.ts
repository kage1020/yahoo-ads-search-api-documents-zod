import { z } from 'zod';

import { campaignServiceValue } from './CampaignServiceValue';

export const campaignServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignServiceValue).nullable()
}).nullable();

export type CampaignServicePage = z.infer<typeof campaignServicePage>;
