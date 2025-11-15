import { z } from 'zod';

export const SsaReportDefinitionServiceReportSkipReportSummary = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportSkipReportSummary = z.infer<typeof SsaReportDefinitionServiceReportSkipReportSummary>;
