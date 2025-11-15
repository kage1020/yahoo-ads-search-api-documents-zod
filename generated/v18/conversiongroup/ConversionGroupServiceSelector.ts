import { z } from 'zod';

export const conversionGroupServiceSelector = z.object({
  accountId: z.number().int(),
  conversionGroupIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(100).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type ConversionGroupServiceSelector = z.infer<typeof conversionGroupServiceSelector>;
