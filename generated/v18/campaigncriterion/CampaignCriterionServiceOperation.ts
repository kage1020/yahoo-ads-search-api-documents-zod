import { z } from 'zod';

import { campaignCriterion } from './CampaignCriterion';
import { campaignCriterionServiceUse } from './CampaignCriterionServiceUse';

export const campaignCriterionServiceOperation = z.object({
  accountId: z.number().int(),
  campaignId: z.number().int().nullable(),
  operand: z.array(campaignCriterion).nullable(),
  use: campaignCriterionServiceUse
}).nullable();

export type CampaignCriterionServiceOperation = z.infer<typeof campaignCriterionServiceOperation>;
