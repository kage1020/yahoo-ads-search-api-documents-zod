import { z } from 'zod';

export const keywordPlanIdeaServiceUrlSeed = z.object({
  url: z.string().nullable()
}).nullable();

export type KeywordPlanIdeaServiceUrlSeed = z.infer<typeof keywordPlanIdeaServiceUrlSeed>;
