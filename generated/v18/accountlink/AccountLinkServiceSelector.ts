import { z } from 'zod';

import { AccountLinkServiceAccountStatus } from './AccountLinkServiceAccountStatus';

export const AccountLinkServiceSelector = z.object({
  mccAccountId: z.number().int(),
  accountStatuses: z.array(AccountLinkServiceAccountStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountLinkServiceSelector = z.infer<typeof AccountLinkServiceSelector>;
