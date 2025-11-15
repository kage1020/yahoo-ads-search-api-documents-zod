import { z } from 'zod';

import { accountSharedServiceValue } from './AccountSharedServiceValue';

export const accountSharedServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(accountSharedServiceValue).nullable()
}).nullable();

export type AccountSharedServicePage = z.infer<typeof accountSharedServicePage>;
