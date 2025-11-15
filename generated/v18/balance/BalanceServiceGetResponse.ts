import { z } from 'zod';

import { Error } from './Error';
import { BalanceServicePage } from './BalanceServicePage';

export const BalanceServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: BalanceServicePage
}).nullable();

export type BalanceServiceGetResponse = z.infer<typeof BalanceServiceGetResponse>;
