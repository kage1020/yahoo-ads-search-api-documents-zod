import { z } from 'zod';

import { ReportDefinitionServiceValue } from './ReportDefinitionServiceValue';

export const ReportDefinitionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(ReportDefinitionServiceValue).nullable()
}).nullable();

export type ReportDefinitionServicePage = z.infer<typeof ReportDefinitionServicePage>;
