import { z } from 'zod';

import { CampaignBudgetServiceValue } from './CampaignBudgetServiceValue';

export const CampaignBudgetServiceReturnValue = z.object({
  values: z.array(CampaignBudgetServiceValue).nullable()
}).nullable();

export type CampaignBudgetServiceReturnValue = z.infer<typeof CampaignBudgetServiceReturnValue>;
