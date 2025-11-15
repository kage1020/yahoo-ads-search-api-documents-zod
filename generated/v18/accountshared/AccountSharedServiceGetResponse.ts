import { z } from 'zod';

import { error } from '../../common/Error';
import { accountSharedServicePage } from './AccountSharedServicePage';

export const accountSharedServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountSharedServicePage
}).nullable();

export type AccountSharedServiceGetResponse = z.infer<typeof accountSharedServiceGetResponse>;
