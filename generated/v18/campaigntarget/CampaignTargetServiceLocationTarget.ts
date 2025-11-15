import { z } from 'zod';

import { CampaignTargetServiceExcludedType } from './CampaignTargetServiceExcludedType';
import { CampaignTargetServiceTargetingStatus } from './CampaignTargetServiceTargetingStatus';

export const CampaignTargetServiceLocationTarget = z.object({
  cityNameEN: z.string().nullable(),
  cityNameJA: z.string().nullable(),
  excludedType: CampaignTargetServiceExcludedType,
  provinceNameEN: z.string().nullable(),
  provinceNameJA: z.string().nullable(),
  targetingStatus: CampaignTargetServiceTargetingStatus
}).nullable();

export type CampaignTargetServiceLocationTarget = z.infer<typeof CampaignTargetServiceLocationTarget>;
