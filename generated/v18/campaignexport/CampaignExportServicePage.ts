import { z } from 'zod';

import { CampaignExportServiceValue } from './CampaignExportServiceValue';

export const CampaignExportServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(CampaignExportServiceValue).nullable()
}).nullable();

export type CampaignExportServicePage = z.infer<typeof CampaignExportServicePage>;
