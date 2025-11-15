import { z } from 'zod';

import { error } from '../../common/Error';
import { accountCustomizerServiceReturnValue } from './AccountCustomizerServiceReturnValue';

export const accountCustomizerServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountCustomizerServiceReturnValue
}).nullable();

export type AccountCustomizerServiceMutateResponse = z.infer<typeof accountCustomizerServiceMutateResponse>;
