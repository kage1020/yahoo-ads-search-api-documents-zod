import { z } from 'zod';

import { accountTrackingUrl } from './AccountTrackingUrl';

export const accountTrackingUrlServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(accountTrackingUrl).nullable()
}).nullable();

export type AccountTrackingUrlServiceOperation = z.infer<typeof accountTrackingUrlServiceOperation>;
