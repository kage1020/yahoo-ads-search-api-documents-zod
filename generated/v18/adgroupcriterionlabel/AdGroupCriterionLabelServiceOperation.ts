import { z } from 'zod';

import { adGroupCriterionLabel } from './AdGroupCriterionLabel';

export const adGroupCriterionLabelServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupCriterionLabel).nullable()
}).nullable();

export type AdGroupCriterionLabelServiceOperation = z.infer<typeof adGroupCriterionLabelServiceOperation>;
