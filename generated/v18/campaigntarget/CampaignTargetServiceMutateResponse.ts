import { z } from 'zod';

import { Error } from './Error';
import { CampaignTargetServiceReturnValue } from './CampaignTargetServiceReturnValue';

export const CampaignTargetServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignTargetServiceReturnValue
}).nullable();

export type CampaignTargetServiceMutateResponse = z.infer<typeof CampaignTargetServiceMutateResponse>;
