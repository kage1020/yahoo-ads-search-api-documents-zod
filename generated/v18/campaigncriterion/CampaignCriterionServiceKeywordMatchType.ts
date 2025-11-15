import { z } from 'zod';

export const campaignCriterionServiceKeywordMatchType = z.enum(["EXACT", "PHRASE", "BROAD", "UNKNOWN"]).nullable();

export type CampaignCriterionServiceKeywordMatchType = z.infer<typeof campaignCriterionServiceKeywordMatchType>;
