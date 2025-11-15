import { z } from 'zod';

import { KeywordPlanIdeaServiceKeywordAndUrlSeed } from './KeywordPlanIdeaServiceKeywordAndUrlSeed';
import { KeywordPlanIdeaServiceKeywordSeed } from './KeywordPlanIdeaServiceKeywordSeed';
import { KeywordPlanIdeaServiceUrlSeed } from './KeywordPlanIdeaServiceUrlSeed';
import { KeywordPlanIdeaServiceSiteSeed } from './KeywordPlanIdeaServiceSiteSeed';
import { KeywordPlanIdeaServiceSeedType } from './KeywordPlanIdeaServiceSeedType';

export const KeywordPlanIdeaServiceSeed = z.object({
  keywordAndUrlSeed: KeywordPlanIdeaServiceKeywordAndUrlSeed,
  keywordSeed: KeywordPlanIdeaServiceKeywordSeed,
  urlSeed: KeywordPlanIdeaServiceUrlSeed,
  siteSeed: KeywordPlanIdeaServiceSiteSeed,
  seedType: KeywordPlanIdeaServiceSeedType
}).nullable();

export type KeywordPlanIdeaServiceSeed = z.infer<typeof KeywordPlanIdeaServiceSeed>;
