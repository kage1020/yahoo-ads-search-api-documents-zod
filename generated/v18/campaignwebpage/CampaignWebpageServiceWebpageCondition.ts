import { z } from 'zod';

import { CampaignWebpageServiceWebpageConditionType } from './CampaignWebpageServiceWebpageConditionType';
import { CampaignWebpageServiceWebpageOperator } from './CampaignWebpageServiceWebpageOperator';

export const CampaignWebpageServiceWebpageCondition = z.object({
  argument: z.string().nullable(),
  type: CampaignWebpageServiceWebpageConditionType,
  operator: CampaignWebpageServiceWebpageOperator
}).nullable();

export type CampaignWebpageServiceWebpageCondition = z.infer<typeof CampaignWebpageServiceWebpageCondition>;
