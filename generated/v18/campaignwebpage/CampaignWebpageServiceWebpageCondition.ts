import { z } from 'zod';

import { campaignWebpageServiceWebpageConditionType } from './CampaignWebpageServiceWebpageConditionType';
import { campaignWebpageServiceWebpageOperator } from './CampaignWebpageServiceWebpageOperator';

export const campaignWebpageServiceWebpageCondition = z.object({
  argument: z.string().nullable(),
  type: campaignWebpageServiceWebpageConditionType,
  operator: campaignWebpageServiceWebpageOperator
}).nullable();

export type CampaignWebpageServiceWebpageCondition = z.infer<typeof campaignWebpageServiceWebpageCondition>;
