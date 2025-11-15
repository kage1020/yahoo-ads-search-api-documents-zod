import { z } from 'zod';

export const ReportDefinitionServiceReportDownloadEncode = z.enum(["UTF8", "SJIS", "UTF16LE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportDownloadEncode = z.infer<typeof ReportDefinitionServiceReportDownloadEncode>;
