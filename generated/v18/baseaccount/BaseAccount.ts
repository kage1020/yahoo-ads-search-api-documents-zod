import { z } from 'zod';

import { baseAccountServiceAccountStatus } from './BaseAccountServiceAccountStatus';
import { baseAccountServiceAuthType } from './BaseAccountServiceAuthType';
import { baseAccountServiceHasAdminAuth } from './BaseAccountServiceHasAdminAuth';
import { baseAccountServiceIsRootMccAccount } from './BaseAccountServiceIsRootMccAccount';
import { baseAccountServiceIsMccAccount } from './BaseAccountServiceIsMccAccount';
import { baseAccountServiceIsTestAccount } from './BaseAccountServiceIsTestAccount';
import { baseAccountServiceIsSsaAccount } from './BaseAccountServiceIsSsaAccount';

export const baseAccount = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  accountStatus: baseAccountServiceAccountStatus,
  authType: baseAccountServiceAuthType,
  hasAdminAuth: baseAccountServiceHasAdminAuth,
  isRootMccAccount: baseAccountServiceIsRootMccAccount,
  isMccAccount: baseAccountServiceIsMccAccount,
  isTestAccount: baseAccountServiceIsTestAccount,
  isSsaAccount: baseAccountServiceIsSsaAccount
}).nullable();

export type BaseAccount = z.infer<typeof baseAccount>;
