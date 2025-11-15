import { z } from 'zod';

import { AccountTrackingUrlServiceValue } from './AccountTrackingUrlServiceValue';

export const AccountTrackingUrlServiceReturnValue = z.object({
  values: z.array(AccountTrackingUrlServiceValue).nullable()
}).nullable();

export type AccountTrackingUrlServiceReturnValue = z.infer<typeof AccountTrackingUrlServiceReturnValue>;
