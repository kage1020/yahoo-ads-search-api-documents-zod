import { z } from 'zod';

import { error } from '../../common/Error';
import { reportDefinition } from './ReportDefinition';

export const reportDefinitionServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  reportDefinition: reportDefinition
}).nullable();

export type ReportDefinitionServiceValue = z.infer<typeof reportDefinitionServiceValue>;
