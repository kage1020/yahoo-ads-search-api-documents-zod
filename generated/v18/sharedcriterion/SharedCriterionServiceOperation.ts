import { z } from 'zod';

import { SharedCriterion } from './SharedCriterion';

export const SharedCriterionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(SharedCriterion).nullable()
}).nullable();

export type SharedCriterionServiceOperation = z.infer<typeof SharedCriterionServiceOperation>;
