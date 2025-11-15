import { z } from 'zod';

import { CampaignWebpage } from './CampaignWebpage';

export const CampaignWebpageServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CampaignWebpage).nullable()
}).nullable();

export type CampaignWebpageServiceOperation = z.infer<typeof CampaignWebpageServiceOperation>;
