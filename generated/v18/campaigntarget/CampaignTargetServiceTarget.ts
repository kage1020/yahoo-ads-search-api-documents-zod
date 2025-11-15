import { z } from 'zod';

import { CampaignTargetServiceLocationTarget } from './CampaignTargetServiceLocationTarget';
import { CampaignTargetServiceNetworkTarget } from './CampaignTargetServiceNetworkTarget';
import { CampaignTargetServicePlatformTarget } from './CampaignTargetServicePlatformTarget';
import { CampaignTargetServiceRadiusTarget } from './CampaignTargetServiceRadiusTarget';
import { CampaignTargetServiceScheduleTarget } from './CampaignTargetServiceScheduleTarget';
import { CampaignTargetServiceTargetType } from './CampaignTargetServiceTargetType';

export const CampaignTargetServiceTarget = z.object({
  locationTarget: CampaignTargetServiceLocationTarget,
  networkTarget: CampaignTargetServiceNetworkTarget,
  platformTarget: CampaignTargetServicePlatformTarget,
  radiusTarget: CampaignTargetServiceRadiusTarget,
  scheduleTarget: CampaignTargetServiceScheduleTarget,
  targetId: z.string().nullable(),
  targetType: CampaignTargetServiceTargetType
}).nullable();

export type CampaignTargetServiceTarget = z.infer<typeof CampaignTargetServiceTarget>;
