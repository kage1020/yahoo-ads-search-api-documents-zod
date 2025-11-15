import { z } from 'zod';

import { accountManagement } from './AccountManagement';
import { error } from '../../common/Error';

export const accountManagementServiceValue = z.object({
  accountManagement: accountManagement,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountManagementServiceValue = z.infer<typeof accountManagementServiceValue>;
