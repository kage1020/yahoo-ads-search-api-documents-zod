import { z } from 'zod';

export const ReportDefinitionServiceReportSkipReportSummary = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSkipReportSummary = z.infer<typeof ReportDefinitionServiceReportSkipReportSummary>;
