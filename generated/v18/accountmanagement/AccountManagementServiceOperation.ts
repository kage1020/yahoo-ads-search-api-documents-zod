import { z } from 'zod';

import { AccountManagement } from './AccountManagement';

export const AccountManagementServiceOperation = z.object({
  accountId: z.number().int().nullable(),
  operand: z.array(AccountManagement)
}).nullable();

export type AccountManagementServiceOperation = z.infer<typeof AccountManagementServiceOperation>;
