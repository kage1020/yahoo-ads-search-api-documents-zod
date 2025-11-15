import { z } from 'zod';

import { accountManagementServiceValue } from './AccountManagementServiceValue';

export const accountManagementServiceReturnValue = z.object({
  values: z.array(accountManagementServiceValue).nullable()
}).nullable();

export type AccountManagementServiceReturnValue = z.infer<typeof accountManagementServiceReturnValue>;
