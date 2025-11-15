import { z } from 'zod';

export const ReportDefinitionServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  reportJobId: z.number().int().nullable()
}).nullable();

export type ReportDefinitionServiceDownloadSelector = z.infer<typeof ReportDefinitionServiceDownloadSelector>;
