import { z } from 'zod';

import { CampaignServiceValue } from './CampaignServiceValue';

export const CampaignServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignServiceValue).nullable()
}).nullable();

export type CampaignServicePage = z.infer<typeof CampaignServicePage>;
