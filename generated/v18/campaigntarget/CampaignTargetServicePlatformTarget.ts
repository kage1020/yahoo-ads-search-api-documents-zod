import { z } from 'zod';

import { campaignTargetServicePlatformType } from './CampaignTargetServicePlatformType';

export const campaignTargetServicePlatformTarget = z.object({
  platformType: campaignTargetServicePlatformType
}).nullable();

export type CampaignTargetServicePlatformTarget = z.infer<typeof campaignTargetServicePlatformTarget>;
