import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignRetargetingListServiceReturnValue } from './CampaignRetargetingListServiceReturnValue';

export const campaignRetargetingListServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignRetargetingListServiceReturnValue
}).nullable();

export type CampaignRetargetingListServiceMutateResponse = z.infer<typeof campaignRetargetingListServiceMutateResponse>;
