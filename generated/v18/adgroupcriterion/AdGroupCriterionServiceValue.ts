import { z } from 'zod';

import { AdGroupCriterion } from './AdGroupCriterion';
import { Error } from './Error';

export const AdGroupCriterionServiceValue = z.object({
  adGroupCriterion: AdGroupCriterion,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupCriterionServiceValue = z.infer<typeof AdGroupCriterionServiceValue>;
