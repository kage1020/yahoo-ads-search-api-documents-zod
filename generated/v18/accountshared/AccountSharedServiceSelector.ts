import { z } from 'zod';

export const AccountSharedServiceSelector = z.object({
  accountId: z.number().int(),
  sharedListIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(20).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AccountSharedServiceSelector = z.infer<typeof AccountSharedServiceSelector>;
