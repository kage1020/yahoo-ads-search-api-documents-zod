import { z } from 'zod';

import { campaignServiceTargetAll } from './CampaignServiceTargetAll';

export const campaignServiceTargetingSetting = z.object({
  targetAll: campaignServiceTargetAll
}).nullable();

export type CampaignServiceTargetingSetting = z.infer<typeof campaignServiceTargetingSetting>;
