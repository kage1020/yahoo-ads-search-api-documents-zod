import { z } from 'zod';

import { AccountManagement } from './AccountManagement';
import { Error } from './Error';

export const AccountManagementServiceValue = z.object({
  accountManagement: AccountManagement,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountManagementServiceValue = z.infer<typeof AccountManagementServiceValue>;
