import { z } from 'zod';

export const reportDefinitionServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  reportJobId: z.number().int().nullable()
}).nullable();

export type ReportDefinitionServiceDownloadSelector = z.infer<typeof reportDefinitionServiceDownloadSelector>;
