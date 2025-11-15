import { z } from 'zod';

import { Error } from './Error';
import { AccountTrackingUrlServicePage } from './AccountTrackingUrlServicePage';

export const AccountTrackingUrlServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountTrackingUrlServicePage
}).nullable();

export type AccountTrackingUrlServiceGetResponse = z.infer<typeof AccountTrackingUrlServiceGetResponse>;
