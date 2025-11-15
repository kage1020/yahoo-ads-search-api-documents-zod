import { z } from 'zod';

import { campaignExportServiceJobStatus } from './CampaignExportServiceJobStatus';

export const campaignExportServiceJob = z.object({
  accountId: z.number().int().nullable(),
  endDate: z.string().nullable(),
  exportFields: z.array(z.string().nullable()).nullable(),
  jobId: z.number().int().nullable(),
  jobName: z.string().nullable(),
  jobStatus: campaignExportServiceJobStatus,
  progress: z.number().int().nullable(),
  startDate: z.string().nullable(),
  userName: z.string().nullable()
}).nullable();

export type CampaignExportServiceJob = z.infer<typeof campaignExportServiceJob>;
