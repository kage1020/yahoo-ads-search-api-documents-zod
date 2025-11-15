import { z } from 'zod';

import { campaignLabel } from './CampaignLabel';

export const campaignLabelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaignLabel).nullable()
}).nullable();

export type CampaignLabelServiceOperation = z.infer<typeof campaignLabelServiceOperation>;
