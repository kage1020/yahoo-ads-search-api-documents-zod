import { z } from 'zod';

import { error } from '../../common/Error';
import { ssaReportDefinition } from './SsaReportDefinition';

export const ssaReportDefinitionServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  reportDefinition: ssaReportDefinition
}).nullable();

export type SsaReportDefinitionServiceValue = z.infer<typeof ssaReportDefinitionServiceValue>;
