import { z } from 'zod';

import { error } from '../../common/Error';
import { balanceServicePage } from './BalanceServicePage';

export const balanceServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: balanceServicePage
}).nullable();

export type BalanceServiceGetResponse = z.infer<typeof balanceServiceGetResponse>;
