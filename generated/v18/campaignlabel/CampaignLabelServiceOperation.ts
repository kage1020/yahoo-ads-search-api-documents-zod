import { z } from 'zod';

import { CampaignLabel } from './CampaignLabel';

export const CampaignLabelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CampaignLabel).nullable()
}).nullable();

export type CampaignLabelServiceOperation = z.infer<typeof CampaignLabelServiceOperation>;
