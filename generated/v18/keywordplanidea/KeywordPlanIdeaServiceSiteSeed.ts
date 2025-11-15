import { z } from 'zod';

export const keywordPlanIdeaServiceSiteSeed = z.object({
  site: z.string().nullable()
}).nullable();

export type KeywordPlanIdeaServiceSiteSeed = z.infer<typeof keywordPlanIdeaServiceSiteSeed>;
