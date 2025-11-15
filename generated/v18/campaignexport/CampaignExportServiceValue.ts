import { z } from 'zod';

import { Error } from './Error';
import { CampaignExportServiceJob } from './CampaignExportServiceJob';

export const CampaignExportServiceValue = z.object({
  errors: z.array(Error).nullable(),
  job: CampaignExportServiceJob,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignExportServiceValue = z.infer<typeof CampaignExportServiceValue>;
