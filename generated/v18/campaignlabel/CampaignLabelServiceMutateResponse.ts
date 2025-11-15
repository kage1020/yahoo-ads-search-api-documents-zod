import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignLabelServiceReturnValue } from './CampaignLabelServiceReturnValue';

export const campaignLabelServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignLabelServiceReturnValue
}).nullable();

export type CampaignLabelServiceMutateResponse = z.infer<typeof campaignLabelServiceMutateResponse>;
