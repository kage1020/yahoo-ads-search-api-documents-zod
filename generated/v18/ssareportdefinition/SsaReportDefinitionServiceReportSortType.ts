import { z } from 'zod';

export const SsaReportDefinitionServiceReportSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportSortType = z.infer<typeof SsaReportDefinitionServiceReportSortType>;
