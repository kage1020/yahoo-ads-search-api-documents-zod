import { z } from 'zod';

import { accountLinkServiceAccountStatus } from './AccountLinkServiceAccountStatus';

export const accountLinkServiceSelector = z.object({
  mccAccountId: z.number().int(),
  accountStatuses: z.array(accountLinkServiceAccountStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountLinkServiceSelector = z.infer<typeof accountLinkServiceSelector>;
