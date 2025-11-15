import { z } from 'zod';

import { CampaignCriterionServiceValue } from './CampaignCriterionServiceValue';

export const CampaignCriterionServiceReturnValue = z.object({
  values: z.array(CampaignCriterionServiceValue).nullable()
}).nullable();

export type CampaignCriterionServiceReturnValue = z.infer<typeof CampaignCriterionServiceReturnValue>;
