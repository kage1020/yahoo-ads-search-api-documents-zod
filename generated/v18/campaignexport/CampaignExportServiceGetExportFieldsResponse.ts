import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignExportServiceFieldValue } from './CampaignExportServiceFieldValue';

export const campaignExportServiceGetExportFieldsResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: campaignExportServiceFieldValue
}).nullable();

export type CampaignExportServiceGetExportFieldsResponse = z.infer<typeof campaignExportServiceGetExportFieldsResponse>;
