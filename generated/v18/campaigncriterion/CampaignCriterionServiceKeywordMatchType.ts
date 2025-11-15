import { z } from 'zod';

export const CampaignCriterionServiceKeywordMatchType = z.enum(["EXACT", "PHRASE", "BROAD", "UNKNOWN"]).nullable();

export type CampaignCriterionServiceKeywordMatchType = z.infer<typeof CampaignCriterionServiceKeywordMatchType>;
