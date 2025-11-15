import { z } from 'zod';

import { Error } from './Error';
import { CampaignExportServiceFieldValue } from './CampaignExportServiceFieldValue';

export const CampaignExportServiceGetExportFieldsResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: CampaignExportServiceFieldValue
}).nullable();

export type CampaignExportServiceGetExportFieldsResponse = z.infer<typeof CampaignExportServiceGetExportFieldsResponse>;
