import { z } from 'zod';

import { Error } from './Error';
import { ReportDefinitionServicePage } from './ReportDefinitionServicePage';

export const ReportDefinitionServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ReportDefinitionServicePage
}).nullable();

export type ReportDefinitionServiceGetResponse = z.infer<typeof ReportDefinitionServiceGetResponse>;
