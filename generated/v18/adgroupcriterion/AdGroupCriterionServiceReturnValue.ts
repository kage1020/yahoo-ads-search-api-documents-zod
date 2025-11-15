import { z } from 'zod';

import { AdGroupCriterionServiceValue } from './AdGroupCriterionServiceValue';

export const AdGroupCriterionServiceReturnValue = z.object({
  values: z.array(AdGroupCriterionServiceValue).nullable()
}).nullable();

export type AdGroupCriterionServiceReturnValue = z.infer<typeof AdGroupCriterionServiceReturnValue>;
