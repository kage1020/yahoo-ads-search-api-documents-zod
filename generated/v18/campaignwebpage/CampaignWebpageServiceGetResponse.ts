import { z } from 'zod';

import { Error } from './Error';
import { CampaignWebpageServicePage } from './CampaignWebpageServicePage';

export const CampaignWebpageServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignWebpageServicePage
}).nullable();

export type CampaignWebpageServiceGetResponse = z.infer<typeof CampaignWebpageServiceGetResponse>;
