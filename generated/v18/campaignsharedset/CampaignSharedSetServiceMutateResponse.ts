import { z } from 'zod';

import { Error } from './Error';
import { CampaignSharedSetServiceReturnValue } from './CampaignSharedSetServiceReturnValue';

export const CampaignSharedSetServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignSharedSetServiceReturnValue
}).nullable();

export type CampaignSharedSetServiceMutateResponse = z.infer<typeof CampaignSharedSetServiceMutateResponse>;
