import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignBudgetServiceReturnValue } from './CampaignBudgetServiceReturnValue';

export const campaignBudgetServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignBudgetServiceReturnValue
}).nullable();

export type CampaignBudgetServiceMutateResponse = z.infer<typeof campaignBudgetServiceMutateResponse>;
