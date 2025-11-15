import { z } from 'zod';

import { Error } from './Error';
import { CampaignCustomizerServicePage } from './CampaignCustomizerServicePage';

export const CampaignCustomizerServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignCustomizerServicePage
}).nullable();

export type CampaignCustomizerServiceGetResponse = z.infer<typeof CampaignCustomizerServiceGetResponse>;
