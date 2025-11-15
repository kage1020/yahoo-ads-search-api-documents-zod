import { z } from 'zod';

import { accountManagement } from './AccountManagement';

export const accountManagementServiceOperation = z.object({
  accountId: z.number().int().nullable(),
  operand: z.array(accountManagement)
}).nullable();

export type AccountManagementServiceOperation = z.infer<typeof accountManagementServiceOperation>;
