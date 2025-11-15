import { z } from 'zod';

import { ssaAccountServiceValue } from './SsaAccountServiceValue';

export const ssaAccountServicePage = z.object({
  authorizationBusinessId: z.string().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(ssaAccountServiceValue).nullable()
}).nullable();

export type SsaAccountServicePage = z.infer<typeof ssaAccountServicePage>;
