import { z } from 'zod';

import { error } from '../../common/Error';
import { ssaReportDefinitionServiceReturnValue } from './SsaReportDefinitionServiceReturnValue';

export const ssaReportDefinitionServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: ssaReportDefinitionServiceReturnValue
}).nullable();

export type SsaReportDefinitionServiceMutateResponse = z.infer<typeof ssaReportDefinitionServiceMutateResponse>;
