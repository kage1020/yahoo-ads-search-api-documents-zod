import { z } from 'zod';

import { campaignExportServiceValue } from './CampaignExportServiceValue';

export const campaignExportServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(campaignExportServiceValue).nullable()
}).nullable();

export type CampaignExportServicePage = z.infer<typeof campaignExportServicePage>;
