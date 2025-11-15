import { z } from 'zod';

import { keywordPlanIdeaServiceKeywordAndUrlSeed } from './KeywordPlanIdeaServiceKeywordAndUrlSeed';
import { keywordPlanIdeaServiceKeywordSeed } from './KeywordPlanIdeaServiceKeywordSeed';
import { keywordPlanIdeaServiceUrlSeed } from './KeywordPlanIdeaServiceUrlSeed';
import { keywordPlanIdeaServiceSiteSeed } from './KeywordPlanIdeaServiceSiteSeed';
import { keywordPlanIdeaServiceSeedType } from './KeywordPlanIdeaServiceSeedType';

export const keywordPlanIdeaServiceSeed = z.object({
  keywordAndUrlSeed: keywordPlanIdeaServiceKeywordAndUrlSeed,
  keywordSeed: keywordPlanIdeaServiceKeywordSeed,
  urlSeed: keywordPlanIdeaServiceUrlSeed,
  siteSeed: keywordPlanIdeaServiceSiteSeed,
  seedType: keywordPlanIdeaServiceSeedType
}).nullable();

export type KeywordPlanIdeaServiceSeed = z.infer<typeof keywordPlanIdeaServiceSeed>;
