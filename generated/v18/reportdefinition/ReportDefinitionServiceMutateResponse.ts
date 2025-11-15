import { z } from 'zod';

import { Error } from './Error';
import { ReportDefinitionServiceReturnValue } from './ReportDefinitionServiceReturnValue';

export const ReportDefinitionServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ReportDefinitionServiceReturnValue
}).nullable();

export type ReportDefinitionServiceMutateResponse = z.infer<typeof ReportDefinitionServiceMutateResponse>;
