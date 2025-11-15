import { z } from 'zod';

import { accountLinkServiceAccountStatus } from './AccountLinkServiceAccountStatus';
import { accountLinkServiceOwnerShipType } from './AccountLinkServiceOwnerShipType';

export const accountLink = z.object({
  mccAccountId: z.number().int(),
  accountId: z.number().int(),
  accountStatus: accountLinkServiceAccountStatus,
  ownerShipType: accountLinkServiceOwnerShipType
}).nullable();

export type AccountLink = z.infer<typeof accountLink>;
