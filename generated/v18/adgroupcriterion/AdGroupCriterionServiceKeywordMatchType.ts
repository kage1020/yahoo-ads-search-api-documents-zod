import { z } from 'zod';

export const adGroupCriterionServiceKeywordMatchType = z.enum(["EXACT", "PHRASE", "BROAD", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceKeywordMatchType = z.infer<typeof adGroupCriterionServiceKeywordMatchType>;
