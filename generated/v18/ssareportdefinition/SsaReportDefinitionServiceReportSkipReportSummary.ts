import { z } from 'zod';

export const ssaReportDefinitionServiceReportSkipReportSummary = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportSkipReportSummary = z.infer<typeof ssaReportDefinitionServiceReportSkipReportSummary>;
