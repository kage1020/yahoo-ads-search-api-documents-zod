import { z } from 'zod';

import { AccountTrackingUrl } from './AccountTrackingUrl';
import { Error } from './Error';

export const AccountTrackingUrlServiceValue = z.object({
  accountTrackingUrl: AccountTrackingUrl,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountTrackingUrlServiceValue = z.infer<typeof AccountTrackingUrlServiceValue>;
