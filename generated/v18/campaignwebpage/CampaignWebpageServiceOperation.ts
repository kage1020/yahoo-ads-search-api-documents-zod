import { z } from 'zod';

import { campaignWebpage } from './CampaignWebpage';

export const campaignWebpageServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(campaignWebpage).nullable()
}).nullable();

export type CampaignWebpageServiceOperation = z.infer<typeof campaignWebpageServiceOperation>;
