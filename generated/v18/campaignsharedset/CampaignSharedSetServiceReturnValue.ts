import { z } from 'zod';

import { campaignSharedSetServiceValue } from './CampaignSharedSetServiceValue';

export const campaignSharedSetServiceReturnValue = z.object({
  values: z.array(campaignSharedSetServiceValue).nullable()
}).nullable();

export type CampaignSharedSetServiceReturnValue = z.infer<typeof campaignSharedSetServiceReturnValue>;
