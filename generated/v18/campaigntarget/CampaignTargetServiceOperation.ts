import { z } from 'zod';

import { CampaignTarget } from './CampaignTarget';

export const CampaignTargetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CampaignTarget).nullable()
}).nullable();

export type CampaignTargetServiceOperation = z.infer<typeof CampaignTargetServiceOperation>;
