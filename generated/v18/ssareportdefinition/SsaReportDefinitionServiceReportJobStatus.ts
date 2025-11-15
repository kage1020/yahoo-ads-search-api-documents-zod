import { z } from 'zod';

export const ssaReportDefinitionServiceReportJobStatus = z.enum(["WAIT", "COMPLETED", "IN_PROGRESS", "FAILED", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportJobStatus = z.infer<typeof ssaReportDefinitionServiceReportJobStatus>;
