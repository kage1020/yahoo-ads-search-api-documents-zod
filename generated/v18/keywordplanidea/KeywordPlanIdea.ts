import { z } from 'zod';

export const keywordPlanIdea = z.object({
  text: z.string().nullable()
}).nullable();

export type KeywordPlanIdea = z.infer<typeof keywordPlanIdea>;
