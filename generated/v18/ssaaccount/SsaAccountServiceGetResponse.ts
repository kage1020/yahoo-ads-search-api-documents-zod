import { z } from 'zod';

import { error } from '../../common/Error';
import { ssaAccountServicePage } from './SsaAccountServicePage';

export const ssaAccountServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: ssaAccountServicePage
}).nullable();

export type SsaAccountServiceGetResponse = z.infer<typeof ssaAccountServiceGetResponse>;
