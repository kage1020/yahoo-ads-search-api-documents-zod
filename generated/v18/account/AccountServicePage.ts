import { z } from 'zod';

import { AccountServiceValue } from './AccountServiceValue';

export const AccountServicePage = z.object({
  authorizationBusinessId: z.string().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(AccountServiceValue).nullable()
}).nullable();

export type AccountServicePage = z.infer<typeof AccountServicePage>;
