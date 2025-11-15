import { z } from 'zod';

export const sharedCriterionServiceKeywordMatchType = z.enum(["EXACT", "PHRASE", "BROAD", "UNKNOWN"]).nullable();

export type SharedCriterionServiceKeywordMatchType = z.infer<typeof sharedCriterionServiceKeywordMatchType>;
