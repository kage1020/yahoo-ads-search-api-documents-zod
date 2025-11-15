import { z } from 'zod';

import { Error } from './Error';
import { CampaignLabelServiceReturnValue } from './CampaignLabelServiceReturnValue';

export const CampaignLabelServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignLabelServiceReturnValue
}).nullable();

export type CampaignLabelServiceMutateResponse = z.infer<typeof CampaignLabelServiceMutateResponse>;
