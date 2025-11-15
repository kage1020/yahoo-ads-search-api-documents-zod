import { z } from 'zod';

import { campaignSharedSetServiceValue } from './CampaignSharedSetServiceValue';

export const campaignSharedSetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignSharedSetServiceValue).nullable()
}).nullable();

export type CampaignSharedSetServicePage = z.infer<typeof campaignSharedSetServicePage>;
