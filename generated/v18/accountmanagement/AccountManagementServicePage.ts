import { z } from 'zod';

import { AccountManagementServiceValue } from './AccountManagementServiceValue';

export const AccountManagementServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AccountManagementServiceValue).nullable()
}).nullable();

export type AccountManagementServicePage = z.infer<typeof AccountManagementServicePage>;
