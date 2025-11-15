import { z } from 'zod';

import { AdGroupCriterionLabel } from './AdGroupCriterionLabel';
import { Error } from './Error';

export const AdGroupCriterionLabelServiceValue = z.object({
  adGroupCriterionLabel: AdGroupCriterionLabel,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupCriterionLabelServiceValue = z.infer<typeof AdGroupCriterionLabelServiceValue>;
