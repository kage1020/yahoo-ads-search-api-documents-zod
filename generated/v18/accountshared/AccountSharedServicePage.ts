import { z } from 'zod';

import { AccountSharedServiceValue } from './AccountSharedServiceValue';

export const AccountSharedServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AccountSharedServiceValue).nullable()
}).nullable();

export type AccountSharedServicePage = z.infer<typeof AccountSharedServicePage>;
