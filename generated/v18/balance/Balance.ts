import { z } from 'zod';

export const balance = z.object({
  accountId: z.number().int().nullable(),
  balance: z.number().int().nullable()
}).nullable();

export type Balance = z.infer<typeof balance>;
