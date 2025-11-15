import { z } from 'zod';

export const KeywordPlanIdeaServiceSeedType = z.enum(["KEYWORD_AND_URL", "KEYWORD", "URL", "SITE", "UNKNOWN"]).nullable();

export type KeywordPlanIdeaServiceSeedType = z.infer<typeof KeywordPlanIdeaServiceSeedType>;
