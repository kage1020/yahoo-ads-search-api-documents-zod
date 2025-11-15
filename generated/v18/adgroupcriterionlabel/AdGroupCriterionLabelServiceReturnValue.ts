import { z } from 'zod';

import { AdGroupCriterionLabelServiceValue } from './AdGroupCriterionLabelServiceValue';

export const AdGroupCriterionLabelServiceReturnValue = z.object({
  values: z.array(AdGroupCriterionLabelServiceValue).nullable()
}).nullable();

export type AdGroupCriterionLabelServiceReturnValue = z.infer<typeof AdGroupCriterionLabelServiceReturnValue>;
