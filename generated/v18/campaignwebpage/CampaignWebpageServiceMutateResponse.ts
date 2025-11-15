import { z } from 'zod';

import { Error } from './Error';
import { CampaignWebpageServiceReturnValue } from './CampaignWebpageServiceReturnValue';

export const CampaignWebpageServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignWebpageServiceReturnValue
}).nullable();

export type CampaignWebpageServiceMutateResponse = z.infer<typeof CampaignWebpageServiceMutateResponse>;
