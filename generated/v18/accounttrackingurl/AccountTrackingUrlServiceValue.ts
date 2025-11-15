import { z } from 'zod';

import { accountTrackingUrl } from './AccountTrackingUrl';
import { error } from '../../common/Error';

export const accountTrackingUrlServiceValue = z.object({
  accountTrackingUrl: accountTrackingUrl,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountTrackingUrlServiceValue = z.infer<typeof accountTrackingUrlServiceValue>;
