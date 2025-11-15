import { z } from 'zod';

import { Error } from './Error';
import { AccountCustomizerServicePage } from './AccountCustomizerServicePage';

export const AccountCustomizerServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AccountCustomizerServicePage
}).nullable();

export type AccountCustomizerServiceGetResponse = z.infer<typeof AccountCustomizerServiceGetResponse>;
