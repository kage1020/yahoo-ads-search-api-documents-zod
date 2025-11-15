import { z } from 'zod';

import { SsaReportDefinition } from './SsaReportDefinition';

export const SsaReportDefinitionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(SsaReportDefinition).nullable()
}).nullable();

export type SsaReportDefinitionServiceOperation = z.infer<typeof SsaReportDefinitionServiceOperation>;
