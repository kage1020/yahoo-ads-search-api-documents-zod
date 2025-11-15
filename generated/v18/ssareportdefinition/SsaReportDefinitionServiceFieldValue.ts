import { z } from 'zod';

import { Error } from './Error';
import { SsaReportDefinitionServiceReportFieldAttribute } from './SsaReportDefinitionServiceReportFieldAttribute';

export const SsaReportDefinitionServiceFieldValue = z.object({
  errors: z.array(Error).nullable(),
  fields: z.array(SsaReportDefinitionServiceReportFieldAttribute).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type SsaReportDefinitionServiceFieldValue = z.infer<typeof SsaReportDefinitionServiceFieldValue>;
