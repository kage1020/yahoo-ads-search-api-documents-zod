import { z } from 'zod';

import { campaignWebpageServiceValue } from './CampaignWebpageServiceValue';

export const campaignWebpageServiceReturnValue = z.object({
  values: z.array(campaignWebpageServiceValue).nullable()
}).nullable();

export type CampaignWebpageServiceReturnValue = z.infer<typeof campaignWebpageServiceReturnValue>;
