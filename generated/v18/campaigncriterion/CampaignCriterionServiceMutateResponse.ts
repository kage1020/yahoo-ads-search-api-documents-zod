import { z } from 'zod';

import { Error } from './Error';
import { CampaignCriterionServiceReturnValue } from './CampaignCriterionServiceReturnValue';

export const CampaignCriterionServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignCriterionServiceReturnValue
}).nullable();

export type CampaignCriterionServiceMutateResponse = z.infer<typeof CampaignCriterionServiceMutateResponse>;
