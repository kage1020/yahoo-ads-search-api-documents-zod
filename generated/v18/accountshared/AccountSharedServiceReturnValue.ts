import { z } from 'zod';

import { AccountSharedServiceValue } from './AccountSharedServiceValue';

export const AccountSharedServiceReturnValue = z.object({
  values: z.array(AccountSharedServiceValue).nullable()
}).nullable();

export type AccountSharedServiceReturnValue = z.infer<typeof AccountSharedServiceReturnValue>;
