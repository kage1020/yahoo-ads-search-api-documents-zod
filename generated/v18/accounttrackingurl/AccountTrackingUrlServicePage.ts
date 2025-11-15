import { z } from 'zod';

import { accountTrackingUrlServiceValue } from './AccountTrackingUrlServiceValue';

export const accountTrackingUrlServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(accountTrackingUrlServiceValue).nullable()
}).nullable();

export type AccountTrackingUrlServicePage = z.infer<typeof accountTrackingUrlServicePage>;
