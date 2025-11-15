import { z } from 'zod';

export const accountShared = z.object({
  accountId: z.number().int().nullable(),
  memberCount: z.number().int().nullable(),
  name: z.string().nullable(),
  referenceCount: z.number().int().nullable(),
  sharedListId: z.number().int().nullable()
}).nullable();

export type AccountShared = z.infer<typeof accountShared>;
