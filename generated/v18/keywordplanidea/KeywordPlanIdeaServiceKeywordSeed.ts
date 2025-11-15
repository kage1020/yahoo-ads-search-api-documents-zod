import { z } from 'zod';

export const keywordPlanIdeaServiceKeywordSeed = z.object({
  keywords: z.array(z.string().nullable()).nullable()
}).nullable();

export type KeywordPlanIdeaServiceKeywordSeed = z.infer<typeof keywordPlanIdeaServiceKeywordSeed>;
