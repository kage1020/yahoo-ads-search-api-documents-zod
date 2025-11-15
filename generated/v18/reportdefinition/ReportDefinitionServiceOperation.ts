import { z } from 'zod';

import { ReportDefinition } from './ReportDefinition';

export const ReportDefinitionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(ReportDefinition).nullable()
}).nullable();

export type ReportDefinitionServiceOperation = z.infer<typeof ReportDefinitionServiceOperation>;
