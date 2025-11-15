import { z } from 'zod';

import { campaignTargetServiceExcludedType } from './CampaignTargetServiceExcludedType';
import { campaignTargetServicePlatformType } from './CampaignTargetServicePlatformType';
import { campaignTargetServiceTargetType } from './CampaignTargetServiceTargetType';

export const campaignTargetServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  excludedType: campaignTargetServiceExcludedType,
  platformTypes: z.array(campaignTargetServicePlatformType).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  targetIds: z.array(z.string().nullable()).nullable(),
  targetTypes: z.array(campaignTargetServiceTargetType).nullable()
}).nullable();

export type CampaignTargetServiceSelector = z.infer<typeof campaignTargetServiceSelector>;
