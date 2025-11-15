import { z } from 'zod';

import { accountServiceValue } from './AccountServiceValue';

export const accountServiceReturnValue = z.object({
  values: z.array(accountServiceValue).nullable()
}).nullable();

export type AccountServiceReturnValue = z.infer<typeof accountServiceReturnValue>;
