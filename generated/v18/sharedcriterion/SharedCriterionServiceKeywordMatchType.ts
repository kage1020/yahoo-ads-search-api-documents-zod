import { z } from 'zod';

export const SharedCriterionServiceKeywordMatchType = z.enum(["EXACT", "PHRASE", "BROAD", "UNKNOWN"]).nullable();

export type SharedCriterionServiceKeywordMatchType = z.infer<typeof SharedCriterionServiceKeywordMatchType>;
