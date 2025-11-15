import { z } from 'zod';

export const learningDataExclusionServiceSelector = z.object({
  accountId: z.number().int(),
  learningDataExclusionIds: z.array(z.number().int().nullable()).nullable(),
  campaignId: z.number().int().nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type LearningDataExclusionServiceSelector = z.infer<typeof learningDataExclusionServiceSelector>;
