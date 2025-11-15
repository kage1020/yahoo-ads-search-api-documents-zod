import { z } from 'zod';

import { SsaReportDefinitionServiceReportSortType } from './SsaReportDefinitionServiceReportSortType';

export const SsaReportDefinitionServiceReportSortField = z.object({
  field: z.string().nullable(),
  reportSortType: SsaReportDefinitionServiceReportSortType
}).nullable();

export type SsaReportDefinitionServiceReportSortField = z.infer<typeof SsaReportDefinitionServiceReportSortField>;
