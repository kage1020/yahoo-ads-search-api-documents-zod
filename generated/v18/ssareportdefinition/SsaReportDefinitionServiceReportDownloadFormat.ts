import { z } from 'zod';

export const ssaReportDefinitionServiceReportDownloadFormat = z.enum(["CSV", "XML", "TSV", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportDownloadFormat = z.infer<typeof ssaReportDefinitionServiceReportDownloadFormat>;
