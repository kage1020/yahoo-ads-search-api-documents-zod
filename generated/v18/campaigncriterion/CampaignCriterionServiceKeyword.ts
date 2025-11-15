import { z } from 'zod';

import { CampaignCriterionServiceKeywordMatchType } from './CampaignCriterionServiceKeywordMatchType';

export const CampaignCriterionServiceKeyword = z.object({
  keywordMatchType: CampaignCriterionServiceKeywordMatchType,
  text: z.string().nullable()
}).nullable();

export type CampaignCriterionServiceKeyword = z.infer<typeof CampaignCriterionServiceKeyword>;
