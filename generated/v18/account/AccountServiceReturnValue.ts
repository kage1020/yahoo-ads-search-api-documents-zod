import { z } from 'zod';

import { AccountServiceValue } from './AccountServiceValue';

export const AccountServiceReturnValue = z.object({
  values: z.array(AccountServiceValue).nullable()
}).nullable();

export type AccountServiceReturnValue = z.infer<typeof AccountServiceReturnValue>;
