import { z } from 'zod';

import { error } from '../../common/Error';
import { reportDefinitionServiceFieldValue } from './ReportDefinitionServiceFieldValue';

export const reportDefinitionServiceGetReportFieldsResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: reportDefinitionServiceFieldValue
}).nullable();

export type ReportDefinitionServiceGetReportFieldsResponse = z.infer<typeof reportDefinitionServiceGetReportFieldsResponse>;
