import { z } from 'zod';

export const AdGroupCriterionServiceKeywordMatchType = z.enum(["EXACT", "PHRASE", "BROAD", "UNKNOWN"]).nullable();

export type AdGroupCriterionServiceKeywordMatchType = z.infer<typeof AdGroupCriterionServiceKeywordMatchType>;
