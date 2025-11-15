import { z } from 'zod';

import { SsaReportDefinitionServiceFilterOperator } from './SsaReportDefinitionServiceFilterOperator';

export const SsaReportDefinitionServiceReportFilter = z.object({
  field: z.string().nullable(),
  filterOperator: SsaReportDefinitionServiceFilterOperator,
  values: z.array(z.string().nullable()).nullable()
}).nullable();

export type SsaReportDefinitionServiceReportFilter = z.infer<typeof SsaReportDefinitionServiceReportFilter>;
