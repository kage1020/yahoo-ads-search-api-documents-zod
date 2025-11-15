import { z } from 'zod';

import { adGroupCriterionServiceCriterionType } from './AdGroupCriterionServiceCriterionType';
import { adGroupCriterionServiceKeyword } from './AdGroupCriterionServiceKeyword';

export const adGroupCriterionServiceCriterion = z.object({
  criterionId: z.number().int().nullable(),
  criterionTrackId: z.number().int().nullable(),
  criterionType: adGroupCriterionServiceCriterionType,
  keyword: adGroupCriterionServiceKeyword
}).nullable();

export type AdGroupCriterionServiceCriterion = z.infer<typeof adGroupCriterionServiceCriterion>;
