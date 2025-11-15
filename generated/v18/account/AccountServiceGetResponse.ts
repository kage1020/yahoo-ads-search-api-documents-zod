import { z } from 'zod';

import { error } from '../../common/Error';
import { accountServicePage } from './AccountServicePage';

export const accountServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountServicePage
}).nullable();

export type AccountServiceGetResponse = z.infer<typeof accountServiceGetResponse>;
