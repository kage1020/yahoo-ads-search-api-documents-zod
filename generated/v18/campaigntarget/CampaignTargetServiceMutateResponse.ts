import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignTargetServiceReturnValue } from './CampaignTargetServiceReturnValue';

export const campaignTargetServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignTargetServiceReturnValue
}).nullable();

export type CampaignTargetServiceMutateResponse = z.infer<typeof campaignTargetServiceMutateResponse>;
