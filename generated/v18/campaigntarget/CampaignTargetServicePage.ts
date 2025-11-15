import { z } from 'zod';

import { campaignTargetServiceValue } from './CampaignTargetServiceValue';

export const campaignTargetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignTargetServiceValue).nullable()
}).nullable();

export type CampaignTargetServicePage = z.infer<typeof campaignTargetServicePage>;
