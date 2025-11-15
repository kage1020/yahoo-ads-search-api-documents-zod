import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignWebpageServiceReturnValue } from './CampaignWebpageServiceReturnValue';

export const campaignWebpageServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignWebpageServiceReturnValue
}).nullable();

export type CampaignWebpageServiceMutateResponse = z.infer<typeof campaignWebpageServiceMutateResponse>;
