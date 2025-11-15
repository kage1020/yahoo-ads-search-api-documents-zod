import { z } from 'zod';

import { campaignCriterionServiceCriterion } from './CampaignCriterionServiceCriterion';
import { campaignCriterionServiceUse } from './CampaignCriterionServiceUse';

export const campaignCriterion = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  criterion: campaignCriterionServiceCriterion,
  use: campaignCriterionServiceUse
}).nullable();

export type CampaignCriterion = z.infer<typeof campaignCriterion>;
