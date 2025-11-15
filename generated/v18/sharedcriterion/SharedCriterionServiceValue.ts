import { z } from 'zod';

import { Error } from './Error';
import { SharedCriterion } from './SharedCriterion';

export const SharedCriterionServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  sharedCriterion: SharedCriterion
}).nullable();

export type SharedCriterionServiceValue = z.infer<typeof SharedCriterionServiceValue>;
