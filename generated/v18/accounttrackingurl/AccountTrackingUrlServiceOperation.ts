import { z } from 'zod';

import { AccountTrackingUrl } from './AccountTrackingUrl';

export const AccountTrackingUrlServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AccountTrackingUrl).nullable()
}).nullable();

export type AccountTrackingUrlServiceOperation = z.infer<typeof AccountTrackingUrlServiceOperation>;
