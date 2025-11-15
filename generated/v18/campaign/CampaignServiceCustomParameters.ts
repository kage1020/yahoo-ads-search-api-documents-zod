import { z } from 'zod';

import { campaignServiceIsRemove } from './CampaignServiceIsRemove';
import { campaignServiceCustomParameter } from './CampaignServiceCustomParameter';

export const campaignServiceCustomParameters = z.object({
  isRemove: campaignServiceIsRemove,
  parameters: z.array(campaignServiceCustomParameter).nullable()
}).nullable();

export type CampaignServiceCustomParameters = z.infer<typeof campaignServiceCustomParameters>;
