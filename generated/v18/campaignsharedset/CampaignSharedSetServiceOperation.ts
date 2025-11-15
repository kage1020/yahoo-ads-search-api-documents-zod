import { z } from 'zod';

import { campaignSharedSet } from './CampaignSharedSet';

export const campaignSharedSetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaignSharedSet).nullable()
}).nullable();

export type CampaignSharedSetServiceOperation = z.infer<typeof campaignSharedSetServiceOperation>;
