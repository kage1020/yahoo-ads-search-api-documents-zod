import { z } from 'zod';

import { accountLinkServiceValue } from './AccountLinkServiceValue';

export const accountLinkServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(accountLinkServiceValue).nullable()
}).nullable();

export type AccountLinkServicePage = z.infer<typeof accountLinkServicePage>;
