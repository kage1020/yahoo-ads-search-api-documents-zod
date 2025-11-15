import { z } from 'zod';

export const ssaReportDefinitionServiceReportSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type SsaReportDefinitionServiceReportSortType = z.infer<typeof ssaReportDefinitionServiceReportSortType>;
