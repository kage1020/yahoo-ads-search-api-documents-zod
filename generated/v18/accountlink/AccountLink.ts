import { z } from 'zod';

import { AccountLinkServiceAccountStatus } from './AccountLinkServiceAccountStatus';
import { AccountLinkServiceOwnerShipType } from './AccountLinkServiceOwnerShipType';

export const AccountLink = z.object({
  mccAccountId: z.number().int(),
  accountId: z.number().int(),
  accountStatus: AccountLinkServiceAccountStatus,
  ownerShipType: AccountLinkServiceOwnerShipType
}).nullable();

export type AccountLink = z.infer<typeof AccountLink>;
