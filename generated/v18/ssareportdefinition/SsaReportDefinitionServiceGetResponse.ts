import { z } from 'zod';

import { error } from '../../common/Error';
import { ssaReportDefinitionServicePage } from './SsaReportDefinitionServicePage';

export const ssaReportDefinitionServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: ssaReportDefinitionServicePage
}).nullable();

export type SsaReportDefinitionServiceGetResponse = z.infer<typeof ssaReportDefinitionServiceGetResponse>;
