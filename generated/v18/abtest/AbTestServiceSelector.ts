import { z } from 'zod';

export const AbTestServiceSelector = z.object({
  accountId: z.number().int().nullable(),
  abTestIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AbTestServiceSelector = z.infer<typeof AbTestServiceSelector>;
