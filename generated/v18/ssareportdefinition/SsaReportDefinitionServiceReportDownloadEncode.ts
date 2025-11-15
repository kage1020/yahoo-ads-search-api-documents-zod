import { z } from 'zod';

export const SsaReportDefinitionServiceReportDownloadEncode = z.enum(["UTF8", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportDownloadEncode = z.infer<typeof SsaReportDefinitionServiceReportDownloadEncode>;
