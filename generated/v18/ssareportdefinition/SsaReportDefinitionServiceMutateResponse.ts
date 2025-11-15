import { z } from 'zod';

import { Error } from './Error';
import { SsaReportDefinitionServiceReturnValue } from './SsaReportDefinitionServiceReturnValue';

export const SsaReportDefinitionServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: SsaReportDefinitionServiceReturnValue
}).nullable();

export type SsaReportDefinitionServiceMutateResponse = z.infer<typeof SsaReportDefinitionServiceMutateResponse>;
