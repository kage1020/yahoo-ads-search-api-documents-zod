import { z } from 'zod';

export const KeywordPlanIdeaServiceSiteSeed = z.object({
  site: z.string().nullable()
}).nullable();

export type KeywordPlanIdeaServiceSiteSeed = z.infer<typeof KeywordPlanIdeaServiceSiteSeed>;
