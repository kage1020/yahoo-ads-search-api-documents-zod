import { z } from 'zod';

import { accountServiceValue } from './AccountServiceValue';

export const accountServicePage = z.object({
  authorizationBusinessId: z.string().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(accountServiceValue).nullable()
}).nullable();

export type AccountServicePage = z.infer<typeof accountServicePage>;
