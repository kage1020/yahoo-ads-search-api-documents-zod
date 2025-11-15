import { z } from 'zod';

import { KeywordPlanIdeaServiceSeed } from './KeywordPlanIdeaServiceSeed';

export const KeywordPlanIdeaServiceSelector = z.object({
  accountId: z.number().int(),
  seed: KeywordPlanIdeaServiceSeed,
  numberResults: z.number().int().min(1).max(500).nullable(),
  pageIndex: z.number().int().min(1).nullable()
}).nullable();

export type KeywordPlanIdeaServiceSelector = z.infer<typeof KeywordPlanIdeaServiceSelector>;
