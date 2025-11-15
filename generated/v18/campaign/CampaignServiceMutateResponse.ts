import { z } from 'zod';

import { Error } from './Error';
import { CampaignServiceReturnValue } from './CampaignServiceReturnValue';

export const CampaignServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignServiceReturnValue
}).nullable();

export type CampaignServiceMutateResponse = z.infer<typeof CampaignServiceMutateResponse>;
