import { z } from 'zod';

import { reportDefinitionServiceValue } from './ReportDefinitionServiceValue';

export const reportDefinitionServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(reportDefinitionServiceValue).nullable()
}).nullable();

export type ReportDefinitionServicePage = z.infer<typeof reportDefinitionServicePage>;
