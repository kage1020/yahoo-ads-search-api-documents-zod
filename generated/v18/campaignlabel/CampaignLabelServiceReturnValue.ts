import { z } from 'zod';

import { campaignLabelServiceValue } from './CampaignLabelServiceValue';

export const campaignLabelServiceReturnValue = z.object({
  values: z.array(campaignLabelServiceValue).nullable()
}).nullable();

export type CampaignLabelServiceReturnValue = z.infer<typeof campaignLabelServiceReturnValue>;
