import { z } from 'zod';

import { SsaReportDefinitionServiceValue } from './SsaReportDefinitionServiceValue';

export const SsaReportDefinitionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(SsaReportDefinitionServiceValue).nullable()
}).nullable();

export type SsaReportDefinitionServicePage = z.infer<typeof SsaReportDefinitionServicePage>;
