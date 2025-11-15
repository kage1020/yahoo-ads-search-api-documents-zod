import { z } from 'zod';

import { campaign } from './Campaign';

export const campaignServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaign).nullable()
}).nullable();

export type CampaignServiceOperation = z.infer<typeof campaignServiceOperation>;
