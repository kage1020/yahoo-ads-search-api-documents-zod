import { z } from 'zod';

export const ReportDefinitionServiceReportSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSortType = z.infer<typeof ReportDefinitionServiceReportSortType>;
