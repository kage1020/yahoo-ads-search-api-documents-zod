import { z } from 'zod';

import { error } from '../../common/Error';
import { accountServiceReturnValue } from './AccountServiceReturnValue';

export const accountServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountServiceReturnValue
}).nullable();

export type AccountServiceMutateResponse = z.infer<typeof accountServiceMutateResponse>;
