import { z } from 'zod';

export const reportDefinitionServiceReportLanguage = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportLanguage = z.infer<typeof reportDefinitionServiceReportLanguage>;
