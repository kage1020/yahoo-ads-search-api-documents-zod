import { z } from 'zod';

import { Campaign } from './Campaign';

export const CampaignServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(Campaign).nullable()
}).nullable();

export type CampaignServiceOperation = z.infer<typeof CampaignServiceOperation>;
