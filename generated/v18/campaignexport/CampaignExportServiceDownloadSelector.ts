import { z } from 'zod';

export const campaignExportServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  jobId: z.number().int().nullable()
}).nullable();

export type CampaignExportServiceDownloadSelector = z.infer<typeof campaignExportServiceDownloadSelector>;
