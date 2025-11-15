import { z } from 'zod';

import { Error } from './Error';
import { SsaAccountServicePage } from './SsaAccountServicePage';

export const SsaAccountServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: SsaAccountServicePage
}).nullable();

export type SsaAccountServiceGetResponse = z.infer<typeof SsaAccountServiceGetResponse>;
