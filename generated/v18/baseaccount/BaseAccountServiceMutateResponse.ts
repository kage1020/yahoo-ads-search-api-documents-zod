import { z } from 'zod';

import { Error } from './Error';
import { BaseAccountServiceReturnValue } from './BaseAccountServiceReturnValue';

export const BaseAccountServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BaseAccountServiceReturnValue
}).nullable();

export type BaseAccountServiceMutateResponse = z.infer<typeof BaseAccountServiceMutateResponse>;
