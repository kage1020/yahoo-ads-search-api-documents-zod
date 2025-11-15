import { z } from 'zod';

import { error } from '../../common/Error';
import { reportDefinitionServicePage } from './ReportDefinitionServicePage';

export const reportDefinitionServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: reportDefinitionServicePage
}).nullable();

export type ReportDefinitionServiceGetResponse = z.infer<typeof reportDefinitionServiceGetResponse>;
