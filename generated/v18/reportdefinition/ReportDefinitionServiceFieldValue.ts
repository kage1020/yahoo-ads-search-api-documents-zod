import { z } from 'zod';

import { Error } from './Error';
import { ReportDefinitionServiceReportFieldAttribute } from './ReportDefinitionServiceReportFieldAttribute';

export const ReportDefinitionServiceFieldValue = z.object({
  errors: z.array(Error).nullable(),
  fields: z.array(ReportDefinitionServiceReportFieldAttribute).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ReportDefinitionServiceFieldValue = z.infer<typeof ReportDefinitionServiceFieldValue>;
