import { z } from 'zod';

import { campaignCriterionServiceValue } from './CampaignCriterionServiceValue';

export const campaignCriterionServiceReturnValue = z.object({
  values: z.array(campaignCriterionServiceValue).nullable()
}).nullable();

export type CampaignCriterionServiceReturnValue = z.infer<typeof campaignCriterionServiceReturnValue>;
