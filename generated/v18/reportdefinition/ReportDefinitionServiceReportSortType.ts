import { z } from 'zod';

export const reportDefinitionServiceReportSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSortType = z.infer<typeof reportDefinitionServiceReportSortType>;
