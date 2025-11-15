import { z } from 'zod';

import { adGroupCriterionCustomizerServiceValue } from './AdGroupCriterionCustomizerServiceValue';

export const adGroupCriterionCustomizerServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(adGroupCriterionCustomizerServiceValue).nullable()
}).nullable();

export type AdGroupCriterionCustomizerServicePage = z.infer<typeof adGroupCriterionCustomizerServicePage>;
