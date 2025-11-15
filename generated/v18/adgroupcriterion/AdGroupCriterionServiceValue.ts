import { z } from 'zod';

import { adGroupCriterion } from './AdGroupCriterion';
import { error } from '../../common/Error';

export const adGroupCriterionServiceValue = z.object({
  adGroupCriterion: adGroupCriterion,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupCriterionServiceValue = z.infer<typeof adGroupCriterionServiceValue>;
