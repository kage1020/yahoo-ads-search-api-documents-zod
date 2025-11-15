import { z } from 'zod';

import { error } from '../../common/Error';
import { accountSharedServiceReturnValue } from './AccountSharedServiceReturnValue';

export const accountSharedServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountSharedServiceReturnValue
}).nullable();

export type AccountSharedServiceMutateResponse = z.infer<typeof accountSharedServiceMutateResponse>;
