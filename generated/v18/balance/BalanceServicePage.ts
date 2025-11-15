import { z } from 'zod';

import { balanceServiceValue } from './BalanceServiceValue';

export const balanceServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(balanceServiceValue).nullable()
}).nullable();

export type BalanceServicePage = z.infer<typeof balanceServicePage>;
