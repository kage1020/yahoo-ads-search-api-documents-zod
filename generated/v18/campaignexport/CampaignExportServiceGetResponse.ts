import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignExportServicePage } from './CampaignExportServicePage';

export const campaignExportServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignExportServicePage
}).nullable();

export type CampaignExportServiceGetResponse = z.infer<typeof campaignExportServiceGetResponse>;
