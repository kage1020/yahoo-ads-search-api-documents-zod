import { z } from 'zod';

import { CampaignSharedSetServiceValue } from './CampaignSharedSetServiceValue';

export const CampaignSharedSetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignSharedSetServiceValue).nullable()
}).nullable();

export type CampaignSharedSetServicePage = z.infer<typeof CampaignSharedSetServicePage>;
