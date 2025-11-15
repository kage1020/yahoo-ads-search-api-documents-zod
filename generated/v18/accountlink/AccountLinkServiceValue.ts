import { z } from 'zod';

import { AccountLink } from './AccountLink';
import { Error } from './Error';

export const AccountLinkServiceValue = z.object({
  accountLink: AccountLink,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountLinkServiceValue = z.infer<typeof AccountLinkServiceValue>;
