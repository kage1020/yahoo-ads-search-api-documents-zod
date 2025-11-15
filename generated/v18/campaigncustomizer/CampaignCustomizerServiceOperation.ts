import { z } from 'zod';

import { CampaignCustomizer } from './CampaignCustomizer';

export const CampaignCustomizerServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CampaignCustomizer).nullable()
}).nullable();

export type CampaignCustomizerServiceOperation = z.infer<typeof CampaignCustomizerServiceOperation>;
