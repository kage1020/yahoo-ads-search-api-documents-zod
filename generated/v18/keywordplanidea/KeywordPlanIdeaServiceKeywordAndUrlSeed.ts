import { z } from 'zod';

export const KeywordPlanIdeaServiceKeywordAndUrlSeed = z.object({
  keywords: z.array(z.string().nullable()).nullable(),
  url: z.string().nullable()
}).nullable();

export type KeywordPlanIdeaServiceKeywordAndUrlSeed = z.infer<typeof KeywordPlanIdeaServiceKeywordAndUrlSeed>;
