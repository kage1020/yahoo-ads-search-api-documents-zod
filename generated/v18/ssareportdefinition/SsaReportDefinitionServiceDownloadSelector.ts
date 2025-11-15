import { z } from 'zod';

export const SsaReportDefinitionServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  reportJobId: z.number().int().nullable()
}).nullable();

export type SsaReportDefinitionServiceDownloadSelector = z.infer<typeof SsaReportDefinitionServiceDownloadSelector>;
