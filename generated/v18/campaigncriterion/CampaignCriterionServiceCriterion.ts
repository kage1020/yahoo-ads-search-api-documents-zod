import { z } from 'zod';

import { CampaignCriterionServiceCriterionType } from './CampaignCriterionServiceCriterionType';
import { CampaignCriterionServiceKeyword } from './CampaignCriterionServiceKeyword';

export const CampaignCriterionServiceCriterion = z.object({
  criterionId: z.number().int().nullable(),
  criterionTrackId: z.number().int().nullable(),
  criterionType: CampaignCriterionServiceCriterionType,
  keyword: CampaignCriterionServiceKeyword
}).nullable();

export type CampaignCriterionServiceCriterion = z.infer<typeof CampaignCriterionServiceCriterion>;
