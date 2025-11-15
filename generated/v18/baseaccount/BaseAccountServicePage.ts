import { z } from 'zod';

import { baseAccountServiceValue } from './BaseAccountServiceValue';

export const baseAccountServicePage = z.object({
  authorizationBusinessId: z.string().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(baseAccountServiceValue).nullable()
}).nullable();

export type BaseAccountServicePage = z.infer<typeof baseAccountServicePage>;
