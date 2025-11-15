import { z } from 'zod';

export const KeywordPlanIdea = z.object({
  text: z.string().nullable()
}).nullable();

export type KeywordPlanIdea = z.infer<typeof KeywordPlanIdea>;
