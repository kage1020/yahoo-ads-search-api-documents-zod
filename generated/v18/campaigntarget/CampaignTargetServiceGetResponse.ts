import { z } from 'zod';

import { Error } from './Error';
import { CampaignTargetServicePage } from './CampaignTargetServicePage';

export const CampaignTargetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignTargetServicePage
}).nullable();

export type CampaignTargetServiceGetResponse = z.infer<typeof CampaignTargetServiceGetResponse>;
