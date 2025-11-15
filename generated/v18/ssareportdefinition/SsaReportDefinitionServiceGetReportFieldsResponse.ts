import { z } from 'zod';

import { Error } from './Error';
import { SsaReportDefinitionServiceFieldValue } from './SsaReportDefinitionServiceFieldValue';

export const SsaReportDefinitionServiceGetReportFieldsResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: SsaReportDefinitionServiceFieldValue
}).nullable();

export type SsaReportDefinitionServiceGetReportFieldsResponse = z.infer<typeof SsaReportDefinitionServiceGetReportFieldsResponse>;
