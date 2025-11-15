import { z } from 'zod';

import { SharedCriterionServiceKeywordMatchType } from './SharedCriterionServiceKeywordMatchType';
import { SharedCriterionServiceUse } from './SharedCriterionServiceUse';

export const SharedCriterion = z.object({
  accountId: z.number().int().nullable(),
  criterionId: z.number().int().nullable(),
  keywordMatchType: SharedCriterionServiceKeywordMatchType,
  sharedListId: z.number().int().nullable(),
  text: z.string().nullable(),
  use: SharedCriterionServiceUse
}).nullable();

export type SharedCriterion = z.infer<typeof SharedCriterion>;
