import { z } from 'zod';

import { AccountServiceStatus } from './AccountServiceStatus';
import { AccountServiceType } from './AccountServiceType';
import { AccountServiceIncludeTestAccount } from './AccountServiceIncludeTestAccount';
import { AccountServiceIncludeMccAccount } from './AccountServiceIncludeMccAccount';

export const AccountServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()).nullable(),
  accountName: z.string().nullable(),
  accountStatuses: z.array(AccountServiceStatus).nullable(),
  accountTypes: z.array(AccountServiceType).nullable(),
  includeTestAccount: AccountServiceIncludeTestAccount,
  includeMccAccount: AccountServiceIncludeMccAccount,
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountServiceSelector = z.infer<typeof AccountServiceSelector>;
