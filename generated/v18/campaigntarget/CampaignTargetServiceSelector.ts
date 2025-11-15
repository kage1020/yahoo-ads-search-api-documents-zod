import { z } from 'zod';

import { CampaignTargetServiceExcludedType } from './CampaignTargetServiceExcludedType';
import { CampaignTargetServicePlatformType } from './CampaignTargetServicePlatformType';
import { CampaignTargetServiceTargetType } from './CampaignTargetServiceTargetType';

export const CampaignTargetServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  excludedType: CampaignTargetServiceExcludedType,
  platformTypes: z.array(CampaignTargetServicePlatformType).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  targetIds: z.array(z.string().nullable()).nullable(),
  targetTypes: z.array(CampaignTargetServiceTargetType).nullable()
}).nullable();

export type CampaignTargetServiceSelector = z.infer<typeof CampaignTargetServiceSelector>;
