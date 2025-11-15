import { z } from 'zod';

import { CampaignBudget } from './CampaignBudget';

export const CampaignBudgetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(CampaignBudget).nullable()
}).nullable();

export type CampaignBudgetServiceOperation = z.infer<typeof CampaignBudgetServiceOperation>;
