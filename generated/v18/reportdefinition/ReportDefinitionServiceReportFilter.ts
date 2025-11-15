import { z } from 'zod';

import { reportDefinitionServiceFilterOperator } from './ReportDefinitionServiceFilterOperator';

export const reportDefinitionServiceReportFilter = z.object({
  field: z.string().nullable(),
  filterOperator: reportDefinitionServiceFilterOperator,
  values: z.array(z.string().nullable()).nullable()
}).nullable();

export type ReportDefinitionServiceReportFilter = z.infer<typeof reportDefinitionServiceReportFilter>;
