import { z } from 'zod';

import { Error } from './Error';
import { AccountLinkServicePage } from './AccountLinkServicePage';

export const AccountLinkServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountLinkServicePage
}).nullable();

export type AccountLinkServiceGetResponse = z.infer<typeof AccountLinkServiceGetResponse>;
