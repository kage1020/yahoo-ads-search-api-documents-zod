import { z } from 'zod';

import { error } from '../../common/Error';
import { ssaReportDefinitionServiceReportFieldAttribute } from './SsaReportDefinitionServiceReportFieldAttribute';

export const ssaReportDefinitionServiceFieldValue = z.object({
  errors: z.array(error).nullable(),
  fields: z.array(ssaReportDefinitionServiceReportFieldAttribute).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type SsaReportDefinitionServiceFieldValue = z.infer<typeof ssaReportDefinitionServiceFieldValue>;
