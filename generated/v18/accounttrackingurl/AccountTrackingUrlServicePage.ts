import { z } from 'zod';

import { AccountTrackingUrlServiceValue } from './AccountTrackingUrlServiceValue';

export const AccountTrackingUrlServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AccountTrackingUrlServiceValue).nullable()
}).nullable();

export type AccountTrackingUrlServicePage = z.infer<typeof AccountTrackingUrlServicePage>;
