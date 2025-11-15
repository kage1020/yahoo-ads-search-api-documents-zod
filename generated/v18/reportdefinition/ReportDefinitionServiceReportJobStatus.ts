import { z } from 'zod';

export const reportDefinitionServiceReportJobStatus = z.enum(["WAIT", "COMPLETED", "IN_PROGRESS", "FAILED", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportJobStatus = z.infer<typeof reportDefinitionServiceReportJobStatus>;
