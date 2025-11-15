import { z } from 'zod';

import { campaignCustomizer } from './CampaignCustomizer';

export const campaignCustomizerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaignCustomizer).nullable()
}).nullable();

export type CampaignCustomizerServiceOperation = z.infer<typeof campaignCustomizerServiceOperation>;
