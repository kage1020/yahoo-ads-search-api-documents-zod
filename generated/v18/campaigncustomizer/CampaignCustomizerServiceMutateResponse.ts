import { z } from 'zod';

import { Error } from './Error';
import { CampaignCustomizerServiceReturnValue } from './CampaignCustomizerServiceReturnValue';

export const CampaignCustomizerServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignCustomizerServiceReturnValue
}).nullable();

export type CampaignCustomizerServiceMutateResponse = z.infer<typeof CampaignCustomizerServiceMutateResponse>;
