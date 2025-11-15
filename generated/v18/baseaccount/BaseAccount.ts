import { z } from 'zod';

import { BaseAccountServiceAccountStatus } from './BaseAccountServiceAccountStatus';
import { BaseAccountServiceAuthType } from './BaseAccountServiceAuthType';
import { BaseAccountServiceHasAdminAuth } from './BaseAccountServiceHasAdminAuth';
import { BaseAccountServiceIsRootMccAccount } from './BaseAccountServiceIsRootMccAccount';
import { BaseAccountServiceIsMccAccount } from './BaseAccountServiceIsMccAccount';
import { BaseAccountServiceIsTestAccount } from './BaseAccountServiceIsTestAccount';
import { BaseAccountServiceIsSsaAccount } from './BaseAccountServiceIsSsaAccount';

export const BaseAccount = z.object({
  accountId: z.number().int().nullable(),
  accountName: z.string().nullable(),
  accountStatus: BaseAccountServiceAccountStatus,
  authType: BaseAccountServiceAuthType,
  hasAdminAuth: BaseAccountServiceHasAdminAuth,
  isRootMccAccount: BaseAccountServiceIsRootMccAccount,
  isMccAccount: BaseAccountServiceIsMccAccount,
  isTestAccount: BaseAccountServiceIsTestAccount,
  isSsaAccount: BaseAccountServiceIsSsaAccount
}).nullable();

export type BaseAccount = z.infer<typeof BaseAccount>;
