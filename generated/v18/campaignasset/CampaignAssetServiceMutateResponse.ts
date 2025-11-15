import { z } from 'zod';

import { Error } from './Error';
import { CampaignAssetServiceReturnValue } from './CampaignAssetServiceReturnValue';

export const CampaignAssetServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignAssetServiceReturnValue
}).nullable();

export type CampaignAssetServiceMutateResponse = z.infer<typeof CampaignAssetServiceMutateResponse>;
