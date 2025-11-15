import { z } from 'zod';

import { error } from '../../common/Error';
import { campaignExportServiceFieldAttribute } from './CampaignExportServiceFieldAttribute';

export const campaignExportServiceFieldValue = z.object({
  errors: z.array(error).nullable(),
  fieldAttributes: z.array(campaignExportServiceFieldAttribute).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type CampaignExportServiceFieldValue = z.infer<typeof campaignExportServiceFieldValue>;
