import { z } from 'zod';

import { keywordPlanIdeaServiceSeed } from './KeywordPlanIdeaServiceSeed';

export const keywordPlanIdeaServiceSelector = z.object({
  accountId: z.number().int(),
  seed: keywordPlanIdeaServiceSeed,
  numberResults: z.number().int().min(1).max(500).nullable(),
  pageIndex: z.number().int().min(1).nullable()
}).nullable();

export type KeywordPlanIdeaServiceSelector = z.infer<typeof keywordPlanIdeaServiceSelector>;
