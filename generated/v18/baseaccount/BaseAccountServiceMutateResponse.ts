import { z } from 'zod';

import { error } from '../../common/Error';
import { baseAccountServiceReturnValue } from './BaseAccountServiceReturnValue';

export const baseAccountServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: baseAccountServiceReturnValue
}).nullable();

export type BaseAccountServiceMutateResponse = z.infer<typeof baseAccountServiceMutateResponse>;
