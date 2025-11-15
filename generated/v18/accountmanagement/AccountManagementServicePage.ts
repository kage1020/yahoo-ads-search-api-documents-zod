import { z } from 'zod';

import { accountManagementServiceValue } from './AccountManagementServiceValue';

export const accountManagementServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(accountManagementServiceValue).nullable()
}).nullable();

export type AccountManagementServicePage = z.infer<typeof accountManagementServicePage>;
