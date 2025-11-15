import { z } from 'zod';

import { CampaignCriterionServiceUse } from './CampaignCriterionServiceUse';

export const CampaignCriterionServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  criterionIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  use: CampaignCriterionServiceUse
}).nullable();

export type CampaignCriterionServiceSelector = z.infer<typeof CampaignCriterionServiceSelector>;
