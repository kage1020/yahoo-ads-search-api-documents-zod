import { z } from 'zod';

import { Error } from './Error';
import { ReportDefinitionServiceFieldValue } from './ReportDefinitionServiceFieldValue';

export const ReportDefinitionServiceGetReportFieldsResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ReportDefinitionServiceFieldValue
}).nullable();

export type ReportDefinitionServiceGetReportFieldsResponse = z.infer<typeof ReportDefinitionServiceGetReportFieldsResponse>;
