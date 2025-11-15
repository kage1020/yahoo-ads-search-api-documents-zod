import { z } from 'zod';

import { error } from '../../common/Error';
import { sharedCriterionServiceReturnValue } from './SharedCriterionServiceReturnValue';

export const sharedCriterionServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: sharedCriterionServiceReturnValue
}).nullable();

export type SharedCriterionServiceMutateResponse = z.infer<typeof sharedCriterionServiceMutateResponse>;
