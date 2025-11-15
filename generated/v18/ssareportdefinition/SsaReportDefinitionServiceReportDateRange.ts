import { z } from 'zod';

export const SsaReportDefinitionServiceReportDateRange = z.object({
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type SsaReportDefinitionServiceReportDateRange = z.infer<typeof SsaReportDefinitionServiceReportDateRange>;
