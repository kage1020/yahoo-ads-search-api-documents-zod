import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignCriterionServiceReturnValue } from './CampaignCriterionServiceReturnValue';

export const campaignCriterionServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignCriterionServiceReturnValue
}).nullable();

export type CampaignCriterionServiceMutateResponse = z.infer<typeof campaignCriterionServiceMutateResponse>;
