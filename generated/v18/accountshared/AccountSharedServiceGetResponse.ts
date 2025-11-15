import { z } from 'zod';

import { Error } from './Error';
import { AccountSharedServicePage } from './AccountSharedServicePage';

export const AccountSharedServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountSharedServicePage
}).nullable();

export type AccountSharedServiceGetResponse = z.infer<typeof AccountSharedServiceGetResponse>;
