import { z } from 'zod';

import { Error } from './Error';
import { AbTestServiceReturnValue } from './AbTestServiceReturnValue';

export const AbTestServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AbTestServiceReturnValue
}).nullable();

export type AbTestServiceMutateResponse = z.infer<typeof AbTestServiceMutateResponse>;
