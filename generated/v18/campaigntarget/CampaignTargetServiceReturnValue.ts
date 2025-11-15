import { z } from 'zod';

import { campaignTargetServiceValue } from './CampaignTargetServiceValue';

export const campaignTargetServiceReturnValue = z.object({
  values: z.array(campaignTargetServiceValue).nullable()
}).nullable();

export type CampaignTargetServiceReturnValue = z.infer<typeof campaignTargetServiceReturnValue>;
