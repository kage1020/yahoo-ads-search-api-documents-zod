import { z } from 'zod';

import { campaignCriterionServiceCriterionType } from './CampaignCriterionServiceCriterionType';
import { campaignCriterionServiceKeyword } from './CampaignCriterionServiceKeyword';

export const campaignCriterionServiceCriterion = z.object({
  criterionId: z.number().int().nullable(),
  criterionTrackId: z.number().int().nullable(),
  criterionType: campaignCriterionServiceCriterionType,
  keyword: campaignCriterionServiceKeyword
}).nullable();

export type CampaignCriterionServiceCriterion = z.infer<typeof campaignCriterionServiceCriterion>;
