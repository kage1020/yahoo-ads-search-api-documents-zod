import { z } from 'zod';

import { Error } from './Error';
import { SsaReportDefinition } from './SsaReportDefinition';

export const SsaReportDefinitionServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  reportDefinition: SsaReportDefinition
}).nullable();

export type SsaReportDefinitionServiceValue = z.infer<typeof SsaReportDefinitionServiceValue>;
