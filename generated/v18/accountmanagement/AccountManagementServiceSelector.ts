import { z } from 'zod';

import { AccountManagementServiceStatus } from './AccountManagementServiceStatus';
import { AccountManagementServicePaymentType } from './AccountManagementServicePaymentType';
import { AccountManagementServiceIncludeTestAccount } from './AccountManagementServiceIncludeTestAccount';

export const AccountManagementServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()).nullable(),
  accountStatuses: z.array(AccountManagementServiceStatus).nullable(),
  accountTypes: z.array(AccountManagementServicePaymentType).nullable(),
  includeTestAccount: AccountManagementServiceIncludeTestAccount,
  numberResults: z.number().int().min(1).max(200).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountManagementServiceSelector = z.infer<typeof AccountManagementServiceSelector>;
