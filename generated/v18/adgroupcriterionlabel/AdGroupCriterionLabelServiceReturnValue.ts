import { z } from 'zod';

import { adGroupCriterionLabelServiceValue } from './AdGroupCriterionLabelServiceValue';

export const adGroupCriterionLabelServiceReturnValue = z.object({
  values: z.array(adGroupCriterionLabelServiceValue).nullable()
}).nullable();

export type AdGroupCriterionLabelServiceReturnValue = z.infer<typeof adGroupCriterionLabelServiceReturnValue>;
