import { z } from 'zod';

export const adGroupCriterionServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type AdGroupCriterionServiceLabel = z.infer<typeof adGroupCriterionServiceLabel>;
