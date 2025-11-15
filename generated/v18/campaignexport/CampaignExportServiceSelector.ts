import { z } from 'zod';

import { campaignExportServiceJobStatus } from './CampaignExportServiceJobStatus';

export const campaignExportServiceSelector = z.object({
  accountId: z.number().int(),
  jobIds: z.array(z.number().int().nullable()).nullable(),
  jobStatuses: z.array(campaignExportServiceJobStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type CampaignExportServiceSelector = z.infer<typeof campaignExportServiceSelector>;
