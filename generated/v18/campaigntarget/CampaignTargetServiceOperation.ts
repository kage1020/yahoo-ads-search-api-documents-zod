import { z } from 'zod';

import { campaignTarget } from './CampaignTarget';

export const campaignTargetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaignTarget).nullable()
}).nullable();

export type CampaignTargetServiceOperation = z.infer<typeof campaignTargetServiceOperation>;
