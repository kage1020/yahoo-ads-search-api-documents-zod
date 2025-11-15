import { z } from 'zod';

import { ssaReportDefinitionServiceReportSortType } from './SsaReportDefinitionServiceReportSortType';

export const ssaReportDefinitionServiceReportSortField = z.object({
  field: z.string().nullable(),
  reportSortType: ssaReportDefinitionServiceReportSortType
}).nullable();

export type SsaReportDefinitionServiceReportSortField = z.infer<typeof ssaReportDefinitionServiceReportSortField>;
