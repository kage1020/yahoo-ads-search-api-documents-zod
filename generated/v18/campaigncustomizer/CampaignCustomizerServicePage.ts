import { z } from 'zod';

import { campaignCustomizerServiceValue } from './CampaignCustomizerServiceValue';

export const campaignCustomizerServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignCustomizerServiceValue).nullable()
}).nullable();

export type CampaignCustomizerServicePage = z.infer<typeof campaignCustomizerServicePage>;
