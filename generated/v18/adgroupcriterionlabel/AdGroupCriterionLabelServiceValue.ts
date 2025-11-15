import { z } from 'zod';

import { adGroupCriterionLabel } from './AdGroupCriterionLabel';
import { error } from '../../common/Error';

export const adGroupCriterionLabelServiceValue = z.object({
  adGroupCriterionLabel: adGroupCriterionLabel,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupCriterionLabelServiceValue = z.infer<typeof adGroupCriterionLabelServiceValue>;
