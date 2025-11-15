import { z } from 'zod';

import { campaignServiceValue } from './CampaignServiceValue';

export const campaignServiceReturnValue = z.object({
  values: z.array(campaignServiceValue).nullable()
}).nullable();

export type CampaignServiceReturnValue = z.infer<typeof campaignServiceReturnValue>;
