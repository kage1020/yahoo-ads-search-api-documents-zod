import { z } from 'zod';

import { AdGroupCriterion } from './AdGroupCriterion';

export const AdGroupCriterionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AdGroupCriterion).nullable()
}).nullable();

export type AdGroupCriterionServiceOperation = z.infer<typeof AdGroupCriterionServiceOperation>;
