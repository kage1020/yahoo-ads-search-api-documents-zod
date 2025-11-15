import { z } from 'zod';

import { Error } from './Error';
import { ReportDefinition } from './ReportDefinition';

export const ReportDefinitionServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  reportDefinition: ReportDefinition
}).nullable();

export type ReportDefinitionServiceValue = z.infer<typeof ReportDefinitionServiceValue>;
