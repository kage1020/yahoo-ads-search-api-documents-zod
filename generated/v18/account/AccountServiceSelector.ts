import { z } from 'zod';

import { accountServiceStatus } from './AccountServiceStatus';
import { accountServiceType } from './AccountServiceType';
import { accountServiceIncludeTestAccount } from './AccountServiceIncludeTestAccount';
import { accountServiceIncludeMccAccount } from './AccountServiceIncludeMccAccount';

export const accountServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()).nullable(),
  accountName: z.string().nullable(),
  accountStatuses: z.array(accountServiceStatus).nullable(),
  accountTypes: z.array(accountServiceType).nullable(),
  includeTestAccount: accountServiceIncludeTestAccount,
  includeMccAccount: accountServiceIncludeMccAccount,
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountServiceSelector = z.infer<typeof accountServiceSelector>;
