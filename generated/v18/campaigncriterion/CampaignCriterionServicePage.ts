import { z } from 'zod';

import { campaignCriterionServiceValue } from './CampaignCriterionServiceValue';

export const campaignCriterionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignCriterionServiceValue).nullable()
}).nullable();

export type CampaignCriterionServicePage = z.infer<typeof campaignCriterionServicePage>;
