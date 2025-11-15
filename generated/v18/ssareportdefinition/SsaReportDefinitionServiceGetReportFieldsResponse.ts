import { z } from 'zod';

import { error } from '../../common/Error';
import { ssaReportDefinitionServiceFieldValue } from './SsaReportDefinitionServiceFieldValue';

export const ssaReportDefinitionServiceGetReportFieldsResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: ssaReportDefinitionServiceFieldValue
}).nullable();

export type SsaReportDefinitionServiceGetReportFieldsResponse = z.infer<typeof ssaReportDefinitionServiceGetReportFieldsResponse>;
