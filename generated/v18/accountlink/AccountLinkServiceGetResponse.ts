import { z } from 'zod';

import { error } from '../../common/Error';
import { accountLinkServicePage } from './AccountLinkServicePage';

export const accountLinkServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountLinkServicePage
}).nullable();

export type AccountLinkServiceGetResponse = z.infer<typeof accountLinkServiceGetResponse>;
