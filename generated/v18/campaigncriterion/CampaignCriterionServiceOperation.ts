import { z } from 'zod';

import { CampaignCriterion } from './CampaignCriterion';
import { CampaignCriterionServiceUse } from './CampaignCriterionServiceUse';

export const CampaignCriterionServiceOperation = z.object({
  accountId: z.number().int(),
  campaignId: z.number().int().nullable(),
  operand: z.array(CampaignCriterion).nullable(),
  use: CampaignCriterionServiceUse
}).nullable();

export type CampaignCriterionServiceOperation = z.infer<typeof CampaignCriterionServiceOperation>;
