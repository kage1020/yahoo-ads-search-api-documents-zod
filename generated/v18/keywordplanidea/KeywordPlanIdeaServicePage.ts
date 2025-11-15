import { z } from 'zod';

import { KeywordPlanIdeaServiceValue } from './KeywordPlanIdeaServiceValue';

export const KeywordPlanIdeaServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(KeywordPlanIdeaServiceValue).nullable()
}).nullable();

export type KeywordPlanIdeaServicePage = z.infer<typeof KeywordPlanIdeaServicePage>;
