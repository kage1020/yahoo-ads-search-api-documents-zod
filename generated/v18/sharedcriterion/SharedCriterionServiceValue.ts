import { z } from 'zod';

import { error } from '../../common/Error';
import { sharedCriterion } from './SharedCriterion';

export const sharedCriterionServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  sharedCriterion: sharedCriterion
}).nullable();

export type SharedCriterionServiceValue = z.infer<typeof sharedCriterionServiceValue>;
