import { z } from 'zod';

import { CampaignTargetServicePlatformType } from './CampaignTargetServicePlatformType';

export const CampaignTargetServicePlatformTarget = z.object({
  platformType: CampaignTargetServicePlatformType
}).nullable();

export type CampaignTargetServicePlatformTarget = z.infer<typeof CampaignTargetServicePlatformTarget>;
