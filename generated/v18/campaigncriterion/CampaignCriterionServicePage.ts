import { z } from 'zod';

import { CampaignCriterionServiceValue } from './CampaignCriterionServiceValue';

export const CampaignCriterionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignCriterionServiceValue).nullable()
}).nullable();

export type CampaignCriterionServicePage = z.infer<typeof CampaignCriterionServicePage>;
