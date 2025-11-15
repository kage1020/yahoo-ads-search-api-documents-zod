import { z } from 'zod';

import { Error } from './Error';
import { CampaignExportServiceFieldAttribute } from './CampaignExportServiceFieldAttribute';

export const CampaignExportServiceFieldValue = z.object({
  errors: z.array(Error).nullable(),
  fieldAttributes: z.array(CampaignExportServiceFieldAttribute).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignExportServiceFieldValue = z.infer<typeof CampaignExportServiceFieldValue>;
