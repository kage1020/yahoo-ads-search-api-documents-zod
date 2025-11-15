import { z } from 'zod';

import { AdGroupCriterionLabel } from './AdGroupCriterionLabel';

export const AdGroupCriterionLabelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupCriterionLabel).nullable()
}).nullable();

export type AdGroupCriterionLabelServiceOperation = z.infer<typeof AdGroupCriterionLabelServiceOperation>;
