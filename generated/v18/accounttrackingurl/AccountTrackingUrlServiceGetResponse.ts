import { z } from 'zod';

import { error } from '../../common/Error';
import { accountTrackingUrlServicePage } from './AccountTrackingUrlServicePage';

export const accountTrackingUrlServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountTrackingUrlServicePage
}).nullable();

export type AccountTrackingUrlServiceGetResponse = z.infer<typeof accountTrackingUrlServiceGetResponse>;
