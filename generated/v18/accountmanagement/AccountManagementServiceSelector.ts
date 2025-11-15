import { z } from 'zod';

import { accountManagementServiceStatus } from './AccountManagementServiceStatus';
import { accountManagementServicePaymentType } from './AccountManagementServicePaymentType';
import { accountManagementServiceIncludeTestAccount } from './AccountManagementServiceIncludeTestAccount';

export const accountManagementServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()).nullable(),
  accountStatuses: z.array(accountManagementServiceStatus).nullable(),
  accountTypes: z.array(accountManagementServicePaymentType).nullable(),
  includeTestAccount: accountManagementServiceIncludeTestAccount,
  numberResults: z.number().int().min(1).max(200).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountManagementServiceSelector = z.infer<typeof accountManagementServiceSelector>;
