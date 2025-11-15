import { z } from 'zod';

export const ssaReportDefinitionServiceReportLanguage = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportLanguage = z.infer<typeof ssaReportDefinitionServiceReportLanguage>;
