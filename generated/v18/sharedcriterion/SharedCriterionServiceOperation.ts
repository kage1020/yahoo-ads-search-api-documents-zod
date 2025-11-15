import { z } from 'zod';

import { sharedCriterion } from './SharedCriterion';

export const sharedCriterionServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(sharedCriterion).nullable()
}).nullable();

export type SharedCriterionServiceOperation = z.infer<typeof sharedCriterionServiceOperation>;
