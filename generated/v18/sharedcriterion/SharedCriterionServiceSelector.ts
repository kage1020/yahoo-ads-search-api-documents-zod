import { z } from 'zod';

export const sharedCriterionServiceSelector = z.object({
  accountId: z.number().int(),
  criterionIds: z.array(z.number().int().nullable()).nullable(),
  sharedListIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type SharedCriterionServiceSelector = z.infer<typeof sharedCriterionServiceSelector>;
