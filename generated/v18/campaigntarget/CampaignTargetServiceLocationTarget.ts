import { z } from 'zod';

import { campaignTargetServiceExcludedType } from './CampaignTargetServiceExcludedType';
import { campaignTargetServiceTargetingStatus } from './CampaignTargetServiceTargetingStatus';

export const campaignTargetServiceLocationTarget = z.object({
  cityNameEN: z.string().nullable(),
  cityNameJA: z.string().nullable(),
  excludedType: campaignTargetServiceExcludedType,
  provinceNameEN: z.string().nullable(),
  provinceNameJA: z.string().nullable(),
  targetingStatus: campaignTargetServiceTargetingStatus
}).nullable();

export type CampaignTargetServiceLocationTarget = z.infer<typeof campaignTargetServiceLocationTarget>;
