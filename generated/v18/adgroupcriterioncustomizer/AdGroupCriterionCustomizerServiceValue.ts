import { z } from 'zod';

import { error } from '../../common/Error';
import { adGroupCriterionCustomizer } from './AdGroupCriterionCustomizer';

export const adGroupCriterionCustomizerServiceValue = z.object({
  errors: z.array(error).nullable(),
  adGroupCustomizer: adGroupCriterionCustomizer,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupCriterionCustomizerServiceValue = z.infer<typeof adGroupCriterionCustomizerServiceValue>;
