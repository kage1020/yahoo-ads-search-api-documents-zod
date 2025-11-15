import { z } from 'zod';

import { AdGroupCriterionServiceCriterionType } from './AdGroupCriterionServiceCriterionType';
import { AdGroupCriterionServiceKeyword } from './AdGroupCriterionServiceKeyword';

export const AdGroupCriterionServiceCriterion = z.object({
  criterionId: z.number().int().nullable(),
  criterionTrackId: z.number().int().nullable(),
  criterionType: AdGroupCriterionServiceCriterionType,
  keyword: AdGroupCriterionServiceKeyword
}).nullable();

export type AdGroupCriterionServiceCriterion = z.infer<typeof AdGroupCriterionServiceCriterion>;
