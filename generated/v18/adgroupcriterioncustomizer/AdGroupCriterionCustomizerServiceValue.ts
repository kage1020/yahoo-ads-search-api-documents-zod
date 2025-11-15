import { z } from 'zod';

import { Error } from './Error';
import { AdGroupCriterionCustomizer } from './AdGroupCriterionCustomizer';

export const AdGroupCriterionCustomizerServiceValue = z.object({
  errors: z.array(Error).nullable(),
  adGroupCustomizer: AdGroupCriterionCustomizer,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupCriterionCustomizerServiceValue = z.infer<typeof AdGroupCriterionCustomizerServiceValue>;
