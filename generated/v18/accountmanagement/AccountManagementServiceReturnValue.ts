import { z } from 'zod';

import { AccountManagementServiceValue } from './AccountManagementServiceValue';

export const AccountManagementServiceReturnValue = z.object({
  values: z.array(AccountManagementServiceValue).nullable()
}).nullable();

export type AccountManagementServiceReturnValue = z.infer<typeof AccountManagementServiceReturnValue>;
