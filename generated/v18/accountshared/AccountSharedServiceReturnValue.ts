import { z } from 'zod';

import { accountSharedServiceValue } from './AccountSharedServiceValue';

export const accountSharedServiceReturnValue = z.object({
  values: z.array(accountSharedServiceValue).nullable()
}).nullable();

export type AccountSharedServiceReturnValue = z.infer<typeof accountSharedServiceReturnValue>;
