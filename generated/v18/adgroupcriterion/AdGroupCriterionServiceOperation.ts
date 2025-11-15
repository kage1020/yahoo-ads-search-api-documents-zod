import { z } from 'zod';

import { adGroupCriterion } from './AdGroupCriterion';

export const adGroupCriterionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(adGroupCriterion).nullable()
}).nullable();

export type AdGroupCriterionServiceOperation = z.infer<typeof adGroupCriterionServiceOperation>;
