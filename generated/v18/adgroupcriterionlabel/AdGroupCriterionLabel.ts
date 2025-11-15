import { z } from 'zod';

export const AdGroupCriterionLabel = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  criterionId: z.number().int().nullable(),
  labelId: z.number().int().nullable()
}).nullable();

export type AdGroupCriterionLabel = z.infer<typeof AdGroupCriterionLabel>;
