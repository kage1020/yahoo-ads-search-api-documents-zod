import { z } from 'zod';

import { adGroupCriterionServiceKeywordMatchType } from './AdGroupCriterionServiceKeywordMatchType';

export const adGroupCriterionServiceKeyword = z.object({
  keywordMatchType: adGroupCriterionServiceKeywordMatchType,
  text: z.string().nullable()
}).nullable();

export type AdGroupCriterionServiceKeyword = z.infer<typeof adGroupCriterionServiceKeyword>;
