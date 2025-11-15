import { z } from 'zod';

export const Balance = z.object({
  accountId: z.number().int().nullable(),
  balance: z.number().int().nullable()
}).nullable();

export type Balance = z.infer<typeof Balance>;
