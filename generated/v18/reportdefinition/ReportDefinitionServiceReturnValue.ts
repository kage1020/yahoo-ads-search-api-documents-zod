import { z } from 'zod';

import { reportDefinitionServiceValue } from './ReportDefinitionServiceValue';

export const reportDefinitionServiceReturnValue = z.object({
  values: z.array(reportDefinitionServiceValue).nullable()
}).nullable();

export type ReportDefinitionServiceReturnValue = z.infer<typeof reportDefinitionServiceReturnValue>;
