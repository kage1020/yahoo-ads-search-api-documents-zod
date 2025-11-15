import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignSharedSetServiceReturnValue } from './CampaignSharedSetServiceReturnValue';

export const campaignSharedSetServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignSharedSetServiceReturnValue
}).nullable();

export type CampaignSharedSetServiceMutateResponse = z.infer<typeof campaignSharedSetServiceMutateResponse>;
