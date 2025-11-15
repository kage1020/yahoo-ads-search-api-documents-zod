import { z } from 'zod';

import { accountTrackingUrlServiceValue } from './AccountTrackingUrlServiceValue';

export const accountTrackingUrlServiceReturnValue = z.object({
  values: z.array(accountTrackingUrlServiceValue).nullable()
}).nullable();

export type AccountTrackingUrlServiceReturnValue = z.infer<typeof accountTrackingUrlServiceReturnValue>;
