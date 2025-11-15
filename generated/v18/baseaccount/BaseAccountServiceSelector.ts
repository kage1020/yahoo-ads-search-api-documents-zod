import { z } from 'zod';

import { BaseAccountServiceAccountStatus } from './BaseAccountServiceAccountStatus';
import { BaseAccountServiceAuthType } from './BaseAccountServiceAuthType';
import { BaseAccountServiceIncludeAdminAuth } from './BaseAccountServiceIncludeAdminAuth';
import { BaseAccountServiceIncludeMccAccount } from './BaseAccountServiceIncludeMccAccount';
import { BaseAccountServiceIncludeTestAccount } from './BaseAccountServiceIncludeTestAccount';
import { BaseAccountServiceIncludeSsaAccount } from './BaseAccountServiceIncludeSsaAccount';

export const BaseAccountServiceSelector = z.object({
  accountIds: z.array(z.number().int().nullable()).nullable(),
  accountName: z.string().nullable(),
  accountStatuses: z.array(BaseAccountServiceAccountStatus).nullable(),
  authType: BaseAccountServiceAuthType,
  includeAdminAuth: BaseAccountServiceIncludeAdminAuth,
  includeMccAccount: BaseAccountServiceIncludeMccAccount,
  includeTestAccount: BaseAccountServiceIncludeTestAccount,
  includeSsaAccount: BaseAccountServiceIncludeSsaAccount,
  numberResults: z.number().int().min(1).max(200).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type BaseAccountServiceSelector = z.infer<typeof BaseAccountServiceSelector>;
