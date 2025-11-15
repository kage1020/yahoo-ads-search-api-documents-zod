import { z } from 'zod';

import { accountLink } from './AccountLink';
import { error } from '../../common/Error';

export const accountLinkServiceValue = z.object({
  accountLink: accountLink,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AccountLinkServiceValue = z.infer<typeof accountLinkServiceValue>;
