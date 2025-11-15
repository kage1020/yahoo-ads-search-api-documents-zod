import { z } from 'zod';

import { Error } from './Error';
import { AccountManagementServicePage } from './AccountManagementServicePage';

export const AccountManagementServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountManagementServicePage
}).nullable();

export type AccountManagementServiceGetResponse = z.infer<typeof AccountManagementServiceGetResponse>;
