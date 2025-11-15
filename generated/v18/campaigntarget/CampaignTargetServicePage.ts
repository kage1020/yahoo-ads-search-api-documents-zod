import { z } from 'zod';

import { CampaignTargetServiceValue } from './CampaignTargetServiceValue';

export const CampaignTargetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignTargetServiceValue).nullable()
}).nullable();

export type CampaignTargetServicePage = z.infer<typeof CampaignTargetServicePage>;
