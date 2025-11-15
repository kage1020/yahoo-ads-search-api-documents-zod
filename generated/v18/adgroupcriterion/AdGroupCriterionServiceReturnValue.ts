import { z } from 'zod';

import { adGroupCriterionServiceValue } from './AdGroupCriterionServiceValue';

export const adGroupCriterionServiceReturnValue = z.object({
  values: z.array(adGroupCriterionServiceValue).nullable()
}).nullable();

export type AdGroupCriterionServiceReturnValue = z.infer<typeof adGroupCriterionServiceReturnValue>;
