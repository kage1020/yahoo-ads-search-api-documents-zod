import { z } from 'zod';

import { ReportDefinitionServiceValue } from './ReportDefinitionServiceValue';

export const ReportDefinitionServiceReturnValue = z.object({
  values: z.array(ReportDefinitionServiceValue).nullable()
}).nullable();

export type ReportDefinitionServiceReturnValue = z.infer<typeof ReportDefinitionServiceReturnValue>;
