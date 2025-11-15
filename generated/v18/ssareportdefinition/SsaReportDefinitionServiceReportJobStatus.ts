import { z } from 'zod';

export const SsaReportDefinitionServiceReportJobStatus = z.enum(["WAIT", "COMPLETED", "IN_PROGRESS", "FAILED", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportJobStatus = z.infer<typeof SsaReportDefinitionServiceReportJobStatus>;
