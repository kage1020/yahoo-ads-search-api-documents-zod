import { z } from 'zod';

import { error } from '../../common/Error';
import { reportDefinitionServiceReportFieldAttribute } from './ReportDefinitionServiceReportFieldAttribute';

export const reportDefinitionServiceFieldValue = z.object({
  errors: z.array(error).nullable(),
  fields: z.array(reportDefinitionServiceReportFieldAttribute).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ReportDefinitionServiceFieldValue = z.infer<typeof reportDefinitionServiceFieldValue>;
