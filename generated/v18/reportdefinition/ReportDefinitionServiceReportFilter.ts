import { z } from 'zod';

import { ReportDefinitionServiceFilterOperator } from './ReportDefinitionServiceFilterOperator';

export const ReportDefinitionServiceReportFilter = z.object({
  field: z.string().nullable(),
  filterOperator: ReportDefinitionServiceFilterOperator,
  values: z.array(z.string().nullable()).nullable()
}).nullable();

export type ReportDefinitionServiceReportFilter = z.infer<typeof ReportDefinitionServiceReportFilter>;
