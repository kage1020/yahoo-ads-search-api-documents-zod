import { z } from 'zod';

import { Error } from './Error';
import { SsaReportDefinitionServicePage } from './SsaReportDefinitionServicePage';

export const SsaReportDefinitionServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: SsaReportDefinitionServicePage
}).nullable();

export type SsaReportDefinitionServiceGetResponse = z.infer<typeof SsaReportDefinitionServiceGetResponse>;
