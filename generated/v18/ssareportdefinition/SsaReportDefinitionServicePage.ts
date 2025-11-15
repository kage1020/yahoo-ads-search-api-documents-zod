import { z } from 'zod';

import { ssaReportDefinitionServiceValue } from './SsaReportDefinitionServiceValue';

export const ssaReportDefinitionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(ssaReportDefinitionServiceValue).nullable()
}).nullable();

export type SsaReportDefinitionServicePage = z.infer<typeof ssaReportDefinitionServicePage>;
