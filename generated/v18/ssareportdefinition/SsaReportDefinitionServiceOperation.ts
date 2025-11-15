import { z } from 'zod';

import { ssaReportDefinition } from './SsaReportDefinition';

export const ssaReportDefinitionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(ssaReportDefinition).nullable()
}).nullable();

export type SsaReportDefinitionServiceOperation = z.infer<typeof ssaReportDefinitionServiceOperation>;
