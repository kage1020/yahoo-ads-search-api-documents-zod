import { z } from 'zod';

import { CampaignCriterionServiceCriterion } from './CampaignCriterionServiceCriterion';
import { CampaignCriterionServiceUse } from './CampaignCriterionServiceUse';

export const CampaignCriterion = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  criterion: CampaignCriterionServiceCriterion,
  use: CampaignCriterionServiceUse
}).nullable();

export type CampaignCriterion = z.infer<typeof CampaignCriterion>;
