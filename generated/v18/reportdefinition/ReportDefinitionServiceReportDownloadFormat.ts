import { z } from 'zod';

export const ReportDefinitionServiceReportDownloadFormat = z.enum(["CSV", "XML", "TSV", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportDownloadFormat = z.infer<typeof ReportDefinitionServiceReportDownloadFormat>;
