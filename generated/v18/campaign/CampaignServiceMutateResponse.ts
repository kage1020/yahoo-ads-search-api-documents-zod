import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignServiceReturnValue } from './CampaignServiceReturnValue';

export const campaignServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignServiceReturnValue
}).nullable();

export type CampaignServiceMutateResponse = z.infer<typeof campaignServiceMutateResponse>;
