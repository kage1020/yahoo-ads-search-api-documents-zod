import { z } from 'zod';

import { AdGroupCriterionServiceKeywordMatchType } from './AdGroupCriterionServiceKeywordMatchType';

export const AdGroupCriterionServiceKeyword = z.object({
  keywordMatchType: AdGroupCriterionServiceKeywordMatchType,
  text: z.string().nullable()
}).nullable();

export type AdGroupCriterionServiceKeyword = z.infer<typeof AdGroupCriterionServiceKeyword>;
