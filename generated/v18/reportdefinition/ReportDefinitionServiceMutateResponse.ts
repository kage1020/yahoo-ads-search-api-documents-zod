import { z } from 'zod';

import { error } from '../../common/Error';
import { reportDefinitionServiceReturnValue } from './ReportDefinitionServiceReturnValue';

export const reportDefinitionServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: reportDefinitionServiceReturnValue
}).nullable();

export type ReportDefinitionServiceMutateResponse = z.infer<typeof reportDefinitionServiceMutateResponse>;
