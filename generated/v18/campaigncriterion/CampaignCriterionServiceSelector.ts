import { z } from 'zod';

import { campaignCriterionServiceUse } from './CampaignCriterionServiceUse';

export const campaignCriterionServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  criterionIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  use: campaignCriterionServiceUse
}).nullable();

export type CampaignCriterionServiceSelector = z.infer<typeof campaignCriterionServiceSelector>;
