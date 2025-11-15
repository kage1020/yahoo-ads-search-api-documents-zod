import { z } from 'zod';

import { Error } from './Error';
import { CampaignBudgetServiceReturnValue } from './CampaignBudgetServiceReturnValue';

export const CampaignBudgetServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignBudgetServiceReturnValue
}).nullable();

export type CampaignBudgetServiceMutateResponse = z.infer<typeof CampaignBudgetServiceMutateResponse>;
