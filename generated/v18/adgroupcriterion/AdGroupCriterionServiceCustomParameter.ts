import { z } from 'zod';

export const adGroupCriterionServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type AdGroupCriterionServiceCustomParameter = z.infer<typeof adGroupCriterionServiceCustomParameter>;
