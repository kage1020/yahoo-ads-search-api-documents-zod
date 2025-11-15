import { z } from 'zod';

import { CampaignCustomizerServiceValue } from './CampaignCustomizerServiceValue';

export const CampaignCustomizerServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignCustomizerServiceValue).nullable()
}).nullable();

export type CampaignCustomizerServicePage = z.infer<typeof CampaignCustomizerServicePage>;
