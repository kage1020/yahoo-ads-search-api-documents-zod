import { z } from 'zod';

import { Error } from './Error';
import { CampaignRetargetingListServiceReturnValue } from './CampaignRetargetingListServiceReturnValue';

export const CampaignRetargetingListServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignRetargetingListServiceReturnValue
}).nullable();

export type CampaignRetargetingListServiceMutateResponse = z.infer<typeof CampaignRetargetingListServiceMutateResponse>;
