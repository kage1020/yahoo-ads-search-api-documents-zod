import { z } from 'zod';

export const keywordPlanIdeaServiceSeedType = z.enum(["KEYWORD_AND_URL", "KEYWORD", "URL", "SITE", "UNKNOWN"]).nullable();

export type KeywordPlanIdeaServiceSeedType = z.infer<typeof keywordPlanIdeaServiceSeedType>;
