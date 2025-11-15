import { z } from 'zod';

export const ReportDefinitionServiceReportJobStatus = z.enum(["WAIT", "COMPLETED", "IN_PROGRESS", "FAILED", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportJobStatus = z.infer<typeof ReportDefinitionServiceReportJobStatus>;
