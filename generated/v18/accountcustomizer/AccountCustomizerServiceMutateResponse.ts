import { z } from 'zod';

import { Error } from './Error';
import { AccountCustomizerServiceReturnValue } from './AccountCustomizerServiceReturnValue';

export const AccountCustomizerServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountCustomizerServiceReturnValue
}).nullable();

export type AccountCustomizerServiceMutateResponse = z.infer<typeof AccountCustomizerServiceMutateResponse>;
