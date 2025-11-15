import { z } from 'zod';

export const SsaReportDefinitionServiceReportDownloadFormat = z.enum(["CSV", "XML", "TSV", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportDownloadFormat = z.infer<typeof SsaReportDefinitionServiceReportDownloadFormat>;
