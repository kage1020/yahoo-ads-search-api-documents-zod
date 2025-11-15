import { z } from 'zod';

import { SsaAccountServiceValue } from './SsaAccountServiceValue';

export const SsaAccountServicePage = z.object({
  authorizationBusinessId: z.string().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(SsaAccountServiceValue).nullable()
}).nullable();

export type SsaAccountServicePage = z.infer<typeof SsaAccountServicePage>;
