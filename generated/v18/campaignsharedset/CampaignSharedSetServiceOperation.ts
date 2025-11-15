import { z } from 'zod';

import { CampaignSharedSet } from './CampaignSharedSet';

export const CampaignSharedSetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CampaignSharedSet).nullable()
}).nullable();

export type CampaignSharedSetServiceOperation = z.infer<typeof CampaignSharedSetServiceOperation>;
