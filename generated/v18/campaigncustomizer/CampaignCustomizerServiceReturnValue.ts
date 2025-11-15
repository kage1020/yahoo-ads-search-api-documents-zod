import { z } from 'zod';

import { campaignCustomizerServiceValue } from './CampaignCustomizerServiceValue';

export const campaignCustomizerServiceReturnValue = z.object({
  values: z.array(campaignCustomizerServiceValue).nullable()
}).nullable();

export type CampaignCustomizerServiceReturnValue = z.infer<typeof campaignCustomizerServiceReturnValue>;
