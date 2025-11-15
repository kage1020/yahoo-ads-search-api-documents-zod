import { z } from 'zod';

import { Error } from './Error';
import { CampaignExportServicePage } from './CampaignExportServicePage';

export const CampaignExportServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignExportServicePage
}).nullable();

export type CampaignExportServiceGetResponse = z.infer<typeof CampaignExportServiceGetResponse>;
