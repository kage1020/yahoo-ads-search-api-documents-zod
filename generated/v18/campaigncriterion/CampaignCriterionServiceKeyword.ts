import { z } from 'zod';

import { campaignCriterionServiceKeywordMatchType } from './CampaignCriterionServiceKeywordMatchType';

export const campaignCriterionServiceKeyword = z.object({
  keywordMatchType: campaignCriterionServiceKeywordMatchType,
  text: z.string().nullable()
}).nullable();

export type CampaignCriterionServiceKeyword = z.infer<typeof campaignCriterionServiceKeyword>;
