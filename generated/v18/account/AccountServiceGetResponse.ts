import { z } from 'zod';

import { Error } from './Error';
import { AccountServicePage } from './AccountServicePage';

export const AccountServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountServicePage
}).nullable();

export type AccountServiceGetResponse = z.infer<typeof AccountServiceGetResponse>;
