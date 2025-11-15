import { z } from 'zod';

export const reportDefinitionServiceReportSkipReportSummary = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSkipReportSummary = z.infer<typeof reportDefinitionServiceReportSkipReportSummary>;
