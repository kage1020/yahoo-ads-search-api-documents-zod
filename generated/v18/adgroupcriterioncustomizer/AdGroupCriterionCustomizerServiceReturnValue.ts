import { z } from 'zod';

import { adGroupCriterionCustomizerServiceValue } from './AdGroupCriterionCustomizerServiceValue';

export const adGroupCriterionCustomizerServiceReturnValue = z.object({
  values: z.array(adGroupCriterionCustomizerServiceValue).nullable()
}).nullable();

export type AdGroupCriterionCustomizerServiceReturnValue = z.infer<typeof adGroupCriterionCustomizerServiceReturnValue>;
