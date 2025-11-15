import { z } from 'zod';

export const ssaReportDefinitionServiceReportDownloadEncode = z.enum(["UTF8", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportDownloadEncode = z.infer<typeof ssaReportDefinitionServiceReportDownloadEncode>;
