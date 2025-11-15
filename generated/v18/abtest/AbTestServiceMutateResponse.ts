import { z } from 'zod';

import { error } from '../../common/Error';
import { abTestServiceReturnValue } from './AbTestServiceReturnValue';

export const abTestServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: abTestServiceReturnValue
}).nullable();

export type AbTestServiceMutateResponse = z.infer<typeof abTestServiceMutateResponse>;
