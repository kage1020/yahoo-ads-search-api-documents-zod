import { z } from 'zod';

import { sharedCriterionServiceKeywordMatchType } from './SharedCriterionServiceKeywordMatchType';
import { sharedCriterionServiceUse } from './SharedCriterionServiceUse';

export const sharedCriterion = z.object({
  accountId: z.number().int().nullable(),
  criterionId: z.number().int().nullable(),
  keywordMatchType: sharedCriterionServiceKeywordMatchType,
  sharedListId: z.number().int().nullable(),
  text: z.string().nullable(),
  use: sharedCriterionServiceUse
}).nullable();

export type SharedCriterion = z.infer<typeof sharedCriterion>;
