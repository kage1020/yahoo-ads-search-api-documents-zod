import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignExportServiceJob } from './CampaignExportServiceJob';

export const campaignExportServiceValue = z.object({
  errors: z.array(error).nullable(),
  job: campaignExportServiceJob,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignExportServiceValue = z.infer<typeof campaignExportServiceValue>;
