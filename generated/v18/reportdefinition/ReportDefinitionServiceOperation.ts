import { z } from 'zod';

import { reportDefinition } from './ReportDefinition';

export const reportDefinitionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(reportDefinition).nullable()
}).nullable();

export type ReportDefinitionServiceOperation = z.infer<typeof reportDefinitionServiceOperation>;
