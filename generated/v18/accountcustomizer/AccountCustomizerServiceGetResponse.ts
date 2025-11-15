import { z } from 'zod';

import { error } from '../../common/Error';
import { accountCustomizerServicePage } from './AccountCustomizerServicePage';

export const accountCustomizerServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: accountCustomizerServicePage
}).nullable();

export type AccountCustomizerServiceGetResponse = z.infer<typeof accountCustomizerServiceGetResponse>;
