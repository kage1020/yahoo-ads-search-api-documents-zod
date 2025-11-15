import { z } from 'zod';

import { ReportDefinitionServiceReportSortType } from './ReportDefinitionServiceReportSortType';

export const ReportDefinitionServiceReportSortField = z.object({
  field: z.string().nullable(),
  reportSortType: ReportDefinitionServiceReportSortType
}).nullable();

export type ReportDefinitionServiceReportSortField = z.infer<typeof ReportDefinitionServiceReportSortField>;
