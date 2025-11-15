import { z } from 'zod';

export const ReportDefinitionServiceReportDateRange = z.object({
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type ReportDefinitionServiceReportDateRange = z.infer<typeof ReportDefinitionServiceReportDateRange>;
