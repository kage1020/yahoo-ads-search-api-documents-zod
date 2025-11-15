import { z } from 'zod';

import { reportDefinitionServiceReportSortType } from './ReportDefinitionServiceReportSortType';

export const reportDefinitionServiceReportSortField = z.object({
  field: z.string().nullable(),
  reportSortType: reportDefinitionServiceReportSortType
}).nullable();

export type ReportDefinitionServiceReportSortField = z.infer<typeof reportDefinitionServiceReportSortField>;
