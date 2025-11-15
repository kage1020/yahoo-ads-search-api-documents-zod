import { z } from 'zod';

export const BalanceServiceSelector = z.object({
  accountIds: z.array(z.number().int()),
  numberResults: z.number().int().min(1).max(200).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type BalanceServiceSelector = z.infer<typeof BalanceServiceSelector>;
