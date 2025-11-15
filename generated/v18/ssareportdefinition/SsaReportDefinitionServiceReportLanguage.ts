import { z } from 'zod';

export const SsaReportDefinitionServiceReportLanguage = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportLanguage = z.infer<typeof SsaReportDefinitionServiceReportLanguage>;
