import { z } from 'zod';

import { Error } from './Error';
import { CampaignServicePage } from './CampaignServicePage';

export const CampaignServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignServicePage
}).nullable();

export type CampaignServiceGetResponse = z.infer<typeof CampaignServiceGetResponse>;
