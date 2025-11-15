import { z } from 'zod';

import { Error } from './Error';
import { CampaignSharedSetServicePage } from './CampaignSharedSetServicePage';

export const CampaignSharedSetServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignSharedSetServicePage
}).nullable();

export type CampaignSharedSetServiceGetResponse = z.infer<typeof CampaignSharedSetServiceGetResponse>;
