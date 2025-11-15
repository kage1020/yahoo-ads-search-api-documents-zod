import { z } from 'zod';

export const KeywordPlanIdeaServiceKeywordSeed = z.object({
  keywords: z.array(z.string().nullable()).nullable()
}).nullable();

export type KeywordPlanIdeaServiceKeywordSeed = z.infer<typeof KeywordPlanIdeaServiceKeywordSeed>;
