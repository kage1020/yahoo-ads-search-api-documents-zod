import { z } from 'zod';

import { Error } from './Error';
import { SharedCriterionServiceReturnValue } from './SharedCriterionServiceReturnValue';

export const SharedCriterionServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: SharedCriterionServiceReturnValue
}).nullable();

export type SharedCriterionServiceMutateResponse = z.infer<typeof SharedCriterionServiceMutateResponse>;
