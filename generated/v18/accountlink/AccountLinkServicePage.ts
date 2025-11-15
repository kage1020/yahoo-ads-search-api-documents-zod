import { z } from 'zod';

import { AccountLinkServiceValue } from './AccountLinkServiceValue';

export const AccountLinkServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AccountLinkServiceValue).nullable()
}).nullable();

export type AccountLinkServicePage = z.infer<typeof AccountLinkServicePage>;
