import { z } from 'zod';

import { keywordPlanIdeaServiceValue } from './KeywordPlanIdeaServiceValue';

export const keywordPlanIdeaServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(keywordPlanIdeaServiceValue).nullable()
}).nullable();

export type KeywordPlanIdeaServicePage = z.infer<typeof keywordPlanIdeaServicePage>;
