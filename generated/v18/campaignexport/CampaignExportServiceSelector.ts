import { z } from 'zod';

import { CampaignExportServiceJobStatus } from './CampaignExportServiceJobStatus';

export const CampaignExportServiceSelector = z.object({
  accountId: z.number().int(),
  jobIds: z.array(z.number().int().nullable()).nullable(),
  jobStatuses: z.array(CampaignExportServiceJobStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type CampaignExportServiceSelector = z.infer<typeof CampaignExportServiceSelector>;
