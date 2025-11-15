import { z } from 'zod';

import { AdGroupCriterionCustomizerServiceValue } from './AdGroupCriterionCustomizerServiceValue';

export const AdGroupCriterionCustomizerServiceReturnValue = z.object({
  values: z.array(AdGroupCriterionCustomizerServiceValue).nullable()
}).nullable();

export type AdGroupCriterionCustomizerServiceReturnValue = z.infer<typeof AdGroupCriterionCustomizerServiceReturnValue>;
