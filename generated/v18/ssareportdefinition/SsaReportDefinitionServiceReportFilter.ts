import { z } from 'zod';

import { ssaReportDefinitionServiceFilterOperator } from './SsaReportDefinitionServiceFilterOperator';

export const ssaReportDefinitionServiceReportFilter = z.object({
  field: z.string().nullable(),
  filterOperator: ssaReportDefinitionServiceFilterOperator,
  values: z.array(z.string().nullable()).nullable()
}).nullable();

export type SsaReportDefinitionServiceReportFilter = z.infer<typeof ssaReportDefinitionServiceReportFilter>;
