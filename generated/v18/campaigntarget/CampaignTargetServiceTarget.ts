import { z } from 'zod';

import { campaignTargetServiceLocationTarget } from './CampaignTargetServiceLocationTarget';
import { campaignTargetServiceNetworkTarget } from './CampaignTargetServiceNetworkTarget';
import { campaignTargetServicePlatformTarget } from './CampaignTargetServicePlatformTarget';
import { campaignTargetServiceRadiusTarget } from './CampaignTargetServiceRadiusTarget';
import { campaignTargetServiceScheduleTarget } from './CampaignTargetServiceScheduleTarget';
import { campaignTargetServiceTargetType } from './CampaignTargetServiceTargetType';

export const campaignTargetServiceTarget = z.object({
  locationTarget: campaignTargetServiceLocationTarget,
  networkTarget: campaignTargetServiceNetworkTarget,
  platformTarget: campaignTargetServicePlatformTarget,
  radiusTarget: campaignTargetServiceRadiusTarget,
  scheduleTarget: campaignTargetServiceScheduleTarget,
  targetId: z.string().nullable(),
  targetType: campaignTargetServiceTargetType
}).nullable();

export type CampaignTargetServiceTarget = z.infer<typeof campaignTargetServiceTarget>;
