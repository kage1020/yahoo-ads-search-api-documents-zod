import { z } from 'zod';

export const ReportDefinitionServiceReportLanguage = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportLanguage = z.infer<typeof ReportDefinitionServiceReportLanguage>;
