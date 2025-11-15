import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignCustomizerServiceReturnValue } from './CampaignCustomizerServiceReturnValue';

export const campaignCustomizerServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignCustomizerServiceReturnValue
}).nullable();

export type CampaignCustomizerServiceMutateResponse = z.infer<typeof campaignCustomizerServiceMutateResponse>;
