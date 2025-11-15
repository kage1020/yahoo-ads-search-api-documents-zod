import { z } from 'zod';

import { BaseAccountServiceValue } from './BaseAccountServiceValue';

export const BaseAccountServicePage = z.object({
  authorizationBusinessId: z.string().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(BaseAccountServiceValue).nullable()
}).nullable();

export type BaseAccountServicePage = z.infer<typeof BaseAccountServicePage>;
